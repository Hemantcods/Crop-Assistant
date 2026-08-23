import React, { createContext, useContext, useState, useEffect } from 'react';
import { cropService } from '../services/cropService';
import { MOCK_CROPS } from '../data/mockData';

const CropContext = createContext();

export const CropProvider = ({ children }) => {
  const [crops, setCrops] = useState([]);
  const [activeCropId, setActiveCropId] = useState('wheat');
  const [isLoading, setIsLoading] = useState(true);

  const fetchCrops = async () => {
    try {
      setIsLoading(true);
      const data = await cropService.getCrops();
      setCrops(data);
    } catch (err) {
      console.error('Error loading crops:', err);
      setCrops(MOCK_CROPS);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCrops();
  }, []);

  const activeCrop = crops.find((c) => c.id === activeCropId) || crops[0] || MOCK_CROPS[0];

  const addCrop = async (cropData) => {
    const newCrop = await cropService.addCrop(cropData);
    setCrops((prev) => [newCrop, ...prev]);
    setActiveCropId(newCrop.id);
    return newCrop;
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
        activeCrop,
        activeCropId,
        setActiveCropId,
        isLoading,
        refreshCrops: fetchCrops,
        addCrop,
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
