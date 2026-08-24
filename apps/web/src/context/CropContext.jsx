import React, { createContext, useContext, useState, useEffect } from 'react';
import { cropService } from '../services/cropService';
import { farmService } from '../services/farmService';
import { MOCK_CROPS } from '../data/mockData';

const CropContext = createContext();

export const CropProvider = ({ children }) => {
  const [crops, setCrops] = useState([]);
  const [farms, setFarms] = useState([]);
  const [activeCropId, setActiveCropId] = useState('wheat');
  const [isLoading, setIsLoading] = useState(true);

  const fetchCropsAndFarms = async () => {
    try {
      setIsLoading(true);
      const [cropsRes, farmsRes] = await Promise.allSettled([
        cropService.getCrops(),
        farmService.getFarms(),
      ]);
      setCrops(cropsRes.status === 'fulfilled' ? cropsRes.value : MOCK_CROPS);
      setFarms(farmsRes.status === 'fulfilled' && Array.isArray(farmsRes.value) ? farmsRes.value : []);
    } catch (err) {
      console.warn('Error loading crops/farms:', err.message);
      setFarms([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCropsAndFarms();
  }, []);

  const activeCrop = crops.find((c) => c.id === activeCropId) || crops[0] || MOCK_CROPS[0];

  const getFarmById = (farmId) => {
    return farms.find((f) => f.id === farmId) || null;
  };

  const getCropsByFarmId = (farmId) => {
    if (!farmId) return crops;
    const matched = crops.filter((c) => c.farmId === farmId);
    // If crops exist but none have farmId (initial sample data) and there is only 1 farm or this is the first farm, associate them
    if (matched.length === 0 && farms.length > 0 && farms[0]?.id === farmId) {
      const unassigned = crops.filter((c) => !c.farmId);
      if (unassigned.length > 0) return unassigned;
    }
    return matched;
  };

  const addCrop = async (cropData) => {
    const newCrop = await cropService.addCrop(cropData);
    setCrops((prev) => [newCrop, ...prev]);
    setActiveCropId(newCrop.id);
    return newCrop;
  };

  const addFarm = async (farmData) => {
    const newFarm = await farmService.createFarm(farmData);
    setFarms((prev) => [newFarm, ...prev.filter((f) => f.id !== newFarm.id)]);
    return newFarm;
  };

  const deleteFarm = async (farmId) => {
    await farmService.deleteFarm(farmId);
    setFarms((prev) => prev.filter((f) => f.id !== farmId));
  };

  const logActivity = async (cropId, activityData) => {
    const updatedCrop = await cropService.logActivity(cropId, activityData);
    setCrops((prev) => prev.map((c) => (c.id === cropId ? updatedCrop : c)));
    return updatedCrop;
  };

  const toggleTodo = async (cropId, todoId) => {
    const updatedCrop = await cropService.toggleTodo(cropId, todoId);
    setCrops((prev) => prev.map((c) => (c.id === cropId ? updatedCrop : c)));
    return updatedCrop;
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

