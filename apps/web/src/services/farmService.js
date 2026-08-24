import apiClient from './apiClient';

// Helper to normalize farm objects returned from backend
export const normalizeFarm = (farm) => {
  if (!farm) return null;
  const lat = farm.latitude ?? farm.latitide ?? farm.lat ?? 18.5204;
  const lng = farm.longitude ?? farm.lng ?? 73.8567;
  const area = farm.area ?? farm.acres ?? 1.0;

  return {
    ...farm,
    id: farm.id,
    name: farm.name || 'Unnamed Farm',
    latitude: typeof lat === 'number' ? lat : parseFloat(lat) || 18.5204,
    longitude: typeof lng === 'number' ? lng : parseFloat(lng) || 73.8567,
    area: typeof area === 'number' ? area : parseFloat(area) || 1.0,
    areaUnit: farm.areaUnit || 'acre',
    createdAt: farm.createdAt || new Date().toISOString(),
    updatedAt: farm.updatedAt || new Date().toISOString(),
  };
};

export const farmService = {
  // Fetch all farms from real backend: GET /farm
  async getFarms() {
    try {
      const response = await apiClient.get('/farm');
      const data = response.data?.data;
      if (Array.isArray(data)) {
        return data.map(normalizeFarm);
      }
      return [];
    } catch (err) {
      console.warn('[FarmService.getFarms] API error:', err.message);
      // Re-throw or return empty array if unauthorized/offline
      throw err;
    }
  },

  // Get farm by ID from real backend: GET /farm/:farmId
  async getFarmById(farmId) {
    try {
      const response = await apiClient.get(`/farm/${farmId}`);
      if (response.data?.data) {
        return normalizeFarm(response.data.data);
      }
      return null;
    } catch (err) {
      console.warn(`[FarmService.getFarmById] API error for farmId ${farmId}:`, err.message);
      throw err;
    }
  },

  // Create a new farm record in real backend: POST /farm/create
  async createFarm(farmData) {
    const payload = {
      name: farmData.name?.trim() || 'New Farm Plot',
      latitude: parseFloat(farmData.latitude ?? farmData.lat ?? 18.5204),
      longitude: parseFloat(farmData.longitude ?? farmData.lng ?? 73.8567),
      area: parseFloat(farmData.area || farmData.acres || 1.0),
      areaUnit: farmData.areaUnit || 'acre',
    };

    const response = await apiClient.post('/farm/create', payload);
    const created = response.data?.data;
    if (!created) {
      throw new Error(response.data?.message || 'Failed to create farm on server.');
    }
    return normalizeFarm(created);
  },

  // Update a farm record in real backend: PATCH /farm/:farmId
  async updateFarm(farmId, updateData) {
    const response = await apiClient.patch(`/farm/${farmId}`, updateData);
    return normalizeFarm(response.data?.data);
  },

  // Delete a farm record in real backend: DELETE /farm/:farmId
  async deleteFarm(farmId) {
    await apiClient.delete(`/farm/${farmId}`);
    return true;
  },
};


