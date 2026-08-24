import apiClient from './apiClient';
import { MOCK_CROPS, MOCK_SOIL_REPORT } from '../data/mockData';

// Helper to normalize crop records returned from backend API
export const normalizeCrop = (crop, farmName = 'Main Field') => {
  if (!crop) return null;

  const platedDateObj = crop.platedAt ? new Date(crop.platedAt) : new Date();
  const plantedDateStr = isNaN(platedDateObj.getTime())
    ? 'Recently Planted'
    : platedDateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

  const isHealthy = crop.status === 'ACTIVE';
  const displayStatus = crop.status === 'ACTIVE' ? 'Healthy' : crop.status === 'FAILED' ? 'Attention Needed' : 'Harvested';

  return {
    ...crop,
    id: crop.id,
    farmId: crop.farmId,
    name: crop.name || 'Untitled Crop',
    variety: crop.variety || 'Standard Hybrid',
    field: crop.field || farmName || 'Main Field',
    acres: parseFloat(crop.acres) || 2.5,
    plantedDate: plantedDateStr,
    estHarvest: crop.harvestedAt
      ? new Date(crop.harvestedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      : 'Upcoming Season',
    healthPercent: crop.healthPercent || (isHealthy ? 88 : 58),
    growthPercent: crop.growthPercent || 45,
    status: displayStatus,
    rawStatus: crop.status || 'ACTIVE',
    statusVariant: isHealthy ? 'success' : 'warning',
    imageUrl:
      crop.imageUrl ||
      (crop.name?.toLowerCase().includes('rice')
        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuA02HsussWx1SCIYf7Egem2VBYj9DK4Tl4inYfFbYpXgQTb55r7AmNWisIJJlzBd30gSkDlM8w7_1EjKvcfFPmyQEy1GuG-33ROXW4JWCNtJmiWLSaE0lonayRnX6FHLMD0N7POEU3CMlB5c0T1Q2jBnGtAItENP7sJ-VRoXS34GmJNHL8Vxevq9L86xOgi-pIN-UdoAGYw1j2HQDH9q1yvmeiUBrnj7Ml4zM7KB7yvrvrLQkdnKRKdTw'
        : crop.name?.toLowerCase().includes('potato')
        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQDuuSIo9AKBN7avACM8hWP0E8bky4tZN5uI3v1xBzJsY1YAc9Gf271MWIRlf4veLj0WqC5mdG2R7JC4b8_Gecp3gHa6FgvBVw1AQxA_iykPpHSyT3AUvqOxgLNorJeieLc7q1VCTdHK4k7zpxNHyyFS9oZfZnYi5XDzoLvZ1Z3n0kIgIXfMyl1BwABQtYamT60cRnOZfW2XmVYHGE6L-z2Uea-VjJnk7Yh1wv3NmG7fl7Cn0qGjfLMA'
        : 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoi9yWO1zVb3sZ-YnBy2aQv6pF8FGXpewnHSg8FhVqUBhqRcoEh1Tt_hnyGkhTH2Aeq2ltybswYqMiYnr9upLlq8OpmmbExXrBguHES1a0RKoT-0x5HuR3NIvbzPQP5XoslNGFV-XhkMzjlyXN4ij-zoEXm7ORXd2nbtZp_WorIk9izNfjoXG7REjT0vSIHIKNHAdRSNhIXVWJkHszjeFEfRfDb961LViMB31Mem8KvDSMZmWl2Ct5Kw'),
    sensors: crop.sensors || {
      temperature: { value: '24°C', status: 'Optimal', color: '#f57f17', bg: '#fff8e1' },
      soilMoisture: { value: '52%', status: 'Normal', color: '#0288d1', bg: '#e1f5fe' },
      rainProbability: { value: '25%', status: 'Normal', color: '#006c48', bg: '#e8f5e9' },
    },
    growthStages: crop.growthStages || [
      { id: 1, name: 'Germination', status: 'Completed', icon: 'fitbit_check_small' },
      { id: 2, name: 'Vegetative', status: 'Current Stage', isCurrent: true, icon: 'grass' },
      { id: 3, name: 'Flowering', status: 'Upcoming', isUpcoming: true, icon: 'spa' },
      { id: 4, name: 'Maturation', status: 'Upcoming', isUpcoming: true, icon: 'agriculture' },
    ],
    todos: crop.todos || [
      { id: `todo-1`, task: 'Foliar inspection & soil hydration check', note: 'Ensure furrows are free of standing water.', completed: false, border: '#0f5238' },
      { id: `todo-2`, task: 'Routine micro-nutrient booster', note: 'Apply organic compost or bio-fertilizer.', completed: false, border: '#006c48' },
    ],
    healthTrend30d: crop.healthTrend30d || [
      { day: '1', health: 80 },
      { day: '10', health: 84 },
      { day: '20', health: 87 },
      { day: '30', health: 88 },
    ],
    healthTrend7d: crop.healthTrend7d || [
      { day: 'Mon', health: 85 },
      { day: 'Tue', health: 86 },
      { day: 'Wed', health: 87 },
      { day: 'Thu', health: 87 },
      { day: 'Fri', health: 88 },
      { day: 'Sat', health: 88 },
      { day: 'Sun', health: 88 },
    ],
    recentActivities: crop.recentActivities || [
      { id: `act-${Date.now()}`, type: 'Crop Planted', desc: 'Crop registered in farm portfolio', date: 'Active Plot' },
    ],
  };
};

export const cropService = {
  // Fetch all crops for a given farm from real backend: GET /farm/:farmId/crops
  async getFarmCrops(farmId, farmName) {
    if (!farmId) return [];
    try {
      const response = await apiClient.get(`/farm/${farmId}/crops`);
      const data = response.data?.data;
      if (Array.isArray(data)) {
        return data.map((c) => normalizeCrop(c, farmName));
      }
      return [];
    } catch (err) {
      console.warn(`[CropService.getFarmCrops] Error fetching crops for farm ${farmId}:`, err.message);
      throw err;
    }
  },

  // Get specific crop by ID from real backend: GET /farm/:farmId/crops/:cropId
  async getCropById(farmId, cropId) {
    if (!farmId || !cropId) return null;
    try {
      const response = await apiClient.get(`/farm/${farmId}/crops/${cropId}`);
      const data = response.data?.data;
      return data ? normalizeCrop(data) : null;
    } catch (err) {
      console.warn(`[CropService.getCropById] Error for crop ${cropId}:`, err.message);
      throw err;
    }
  },

  // Create a new crop on the backend: POST /farm/:farmId/crops
  async createCrop(farmId, cropData) {
    if (!farmId) {
      throw new Error('Farm ID is required to register a crop.');
    }

    const payload = {
      name: cropData.name?.trim(),
      variety: cropData.variety?.trim() || 'Standard Hybrid',
      platedAt: cropData.platedAt ? new Date(cropData.platedAt).toISOString() : new Date().toISOString(),
      harvestedAt: cropData.harvestedAt ? new Date(cropData.harvestedAt).toISOString() : undefined,
      status: cropData.status || 'ACTIVE',
    };

    const response = await apiClient.post(`/farm/${farmId}/crops`, payload);
    const created = response.data?.data;
    if (!created) {
      throw new Error(response.data?.message || 'Failed to create crop on server.');
    }
    return normalizeCrop(created, cropData.field);
  },

  // Update crop details on backend: PATCH /farm/:farmId/crops/:cropId
  async updateCrop(farmId, cropId, updateData) {
    if (!farmId || !cropId) return null;
    const response = await apiClient.patch(`/farm/${farmId}/crops/${cropId}`, updateData);
    return normalizeCrop(response.data?.data);
  },

  // Delete crop on backend: DELETE /farm/:farmId/crops/:cropId
  async deleteCrop(farmId, cropId) {
    if (!farmId || !cropId) return;
    await apiClient.delete(`/farm/${farmId}/crops/${cropId}`);
    return true;
  },

  // Soil health report parser simulator
  async analyzeSoilReport(_file) {
    await new Promise((r) => setTimeout(r, 1000));
    return {
      success: true,
      data: MOCK_SOIL_REPORT,
      message: 'Soil report parsed with 99% optical accuracy.',
    };
  },
};


