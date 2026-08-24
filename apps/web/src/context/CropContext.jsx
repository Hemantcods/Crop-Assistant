import React, { createContext, useContext, useState, useEffect } from 'react';
import { cropService } from '../services/cropService';
import { farmService } from '../services/farmService';
import { MOCK_CROPS } from '../data/mockData';

const CropContext = createContext();

export const CropProvider = ({ children }) => {
  const [crops, setCrops] = useState([]);
  const [farms, setFarms] = useState([]);
  const [activeCropId, setActiveCropId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchCropsAndFarms = async () => {
    try {
      setIsLoading(true);
      const farmsData = await farmService.getFarms();
      const currentFarms = Array.isArray(farmsData) ? farmsData : [];
      setFarms(currentFarms);

      // Fetch crops across all user's farms from backend
      if (currentFarms.length > 0) {
        const farmCropsResults = await Promise.allSettled(
          currentFarms.map((farm) => cropService.getFarmCrops(farm.id, farm.name))
        );

        const allCrops = [];
        farmCropsResults.forEach((res) => {
          if (res.status === 'fulfilled' && Array.isArray(res.value)) {
            allCrops.push(...res.value);
          }
        });

        setCrops(allCrops);
        if (allCrops.length > 0 && !activeCropId) {
          setActiveCropId(allCrops[0].id);
        }
      } else {
        setCrops([]);
      }
    } catch (err) {
      console.warn('Error loading crops/farms from backend:', err.message);
      setFarms([]);
      setCrops([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCropsAndFarms();
  }, []);

  const activeCrop = crops.find((c) => c.id === activeCropId) || crops[0] || null;

  const getFarmById = (farmId) => {
    return farms.find((f) => f.id === farmId) || null;
  };

  const getCropsByFarmId = (farmId) => {
    if (!farmId) return crops;
    return crops.filter((c) => c.farmId === farmId);
  };

  const addCrop = async (cropData) => {
    const farmId = cropData.farmId || farms[0]?.id;
    if (!farmId) {
      throw new Error('A farm is required to register a crop.');
    }
    const newCrop = await cropService.createCrop(farmId, cropData);
    setCrops((prev) => [newCrop, ...prev.filter((c) => c.id !== newCrop.id)]);
    setActiveCropId(newCrop.id);
    return newCrop;
  };

  const updateCrop = async (farmId, cropId, updateData) => {
    const updated = await cropService.updateCrop(farmId, cropId, updateData);
    setCrops((prev) => prev.map((c) => (c.id === cropId ? updated : c)));
    return updated;
  };

  const deleteCrop = async (farmId, cropId) => {
    await cropService.deleteCrop(farmId, cropId);
    setCrops((prev) => prev.filter((c) => c.id !== cropId));
  };

  const addFarm = async (farmData) => {
    const newFarm = await farmService.createFarm(farmData);
    setFarms((prev) => [newFarm, ...prev.filter((f) => f.id !== newFarm.id)]);
    return newFarm;
  };

  const deleteFarm = async (farmId) => {
    await farmService.deleteFarm(farmId);
    setFarms((prev) => prev.filter((f) => f.id !== farmId));
    setCrops((prev) => prev.filter((c) => c.farmId !== farmId));
  };

  const logActivity = async (cropId, activityData) => {
    setCrops((prev) =>
      prev.map((c) => {
        if (c.id === cropId) {
          const newAct = {
            id: `act-${Date.now()}`,
            type: activityData.type || 'General Log',
            desc: activityData.desc || 'Logged field activity',
            date: 'Just now',
          };
          return {
            ...c,
            recentActivities: [newAct, ...(c.recentActivities || [])],
          };
        }
        return c;
      })
    );
  };

  const toggleTodo = async (cropId, todoId) => {
    setCrops((prev) =>
      prev.map((c) => {
        if (c.id === cropId) {
          return {
            ...c,
            todos: (c.todos || []).map((t) =>
              t.id === todoId ? { ...t, completed: !t.completed } : t
            ),
          };
        }
        return c;
      })
    );
  };

  return (
    <CropContext.Provider
      value={{
        crops,
        farms,
        activeCrop,
        activeCropId,
        setActiveCropId,
        isLoading,
        refreshCrops: fetchCropsAndFarms,
        refreshFarms: fetchCropsAndFarms,
        getFarmById,
        getCropsByFarmId,
        addCrop,
        updateCrop,
        deleteCrop,
        addFarm,
        deleteFarm,
        logActivity,
        toggleTodo,
      }}
    >
      {children}
    </CropContext.Provider>
  );
};

export const useCrops = () => {
  const context = useContext(CropContext);
  if (!context) {
    throw new Error('useCrops must be used within a CropProvider');
  }
  return context;
};

