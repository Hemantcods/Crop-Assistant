import { simulateNetworkDelay } from './apiClient';
import { MOCK_CROPS, MOCK_SOIL_REPORT } from '../data/mockData';

const CROPS_STORAGE_KEY = 'cropcare_crops';

const getStoredCrops = () => {
  const saved = localStorage.getItem(CROPS_STORAGE_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      return MOCK_CROPS;
    }
  }
  return MOCK_CROPS;
};

const saveStoredCrops = (crops) => {
  localStorage.setItem(CROPS_STORAGE_KEY, JSON.stringify(crops));
};

export const cropService = {
  async getCrops() {
    await simulateNetworkDelay(300);
    return getStoredCrops();
  },

  async getCropById(cropId) {
    await simulateNetworkDelay(250);
    const crops = getStoredCrops();
    const crop = crops.find((c) => c.id === cropId);
    if (!crop) {
      // fallback to first crop
      return crops[0];
    }
    return crop;
  },

  async addCrop(newCropData) {
    await simulateNetworkDelay(500);
    const crops = getStoredCrops();
    const newCrop = {
      id: `crop-${Date.now()}`,
      name: newCropData.name || 'New Crop',
      variety: newCropData.variety || 'Standard Hybrid',
      field: newCropData.field || 'Main Field',
      acres: parseFloat(newCropData.acres) || 2.0,
      plantedDate: newCropData.plantedDate || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      estHarvest: newCropData.estHarvest || 'Upcoming Season',
      healthPercent: 90,
      growthPercent: 15,
      status: "Healthy",
      statusVariant: "success",
      imageUrl: newCropData.imageUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuDoi9yWO1zVb3sZ-YnBy2aQv6pF8FGXpewnHSg8FhVqUBhqRcoEh1Tt_hnyGkhTH2Aeq2ltybswYqMiYnr9upLlq8OpmmbExXrBguHES1a0RKoT-0x5HuR3NIvbzPQP5XoslNGFV-XhkMzjlyXN4ij-zoEXm7ORXd2nbtZp_WorIk9izNfjoXG7REjT0vSIHIKNHAdRSNhIXVWJkHszjeFEfRfDb961LViMB31Mem8KvDSMZmWl2Ct5Kw",
      sensors: {
        temperature: { value: "24°C", status: "Optimal", color: "#f57f17", bg: "#fff8e1" },
        soilMoisture: { value: "48%", status: "Normal", color: "#0288d1", bg: "#e1f5fe" },
        rainProbability: { value: "20%", status: "Normal", color: "#006c48", bg: "#e8f5e9" },
      },
      growthStages: [
        { id: 1, name: "Germination", status: "Completed", icon: "fitbit_check_small" },
        { id: 2, name: "Vegetative", status: "Current Stage", isCurrent: true, icon: "grass" },
        { id: 3, name: "Flowering", status: "Upcoming", isUpcoming: true, icon: "spa" },
        { id: 4, name: "Maturation", status: "Upcoming", isUpcoming: true, icon: "agriculture" },
      ],
      todos: [
        { id: `todo-${Date.now()}-1`, task: "Initial soil aeration & nourishment", note: "Apply organic compost", completed: false, border: "#0f5238" },
      ],
      healthTrend30d: [
        { day: "1", health: 85 },
        { day: "5", health: 88 },
        { day: "10", health: 90 },
      ],
      healthTrend7d: [
        { day: "Mon", health: 88 },
        { day: "Tue", health: 89 },
        { day: "Wed", health: 90 },
      ],
      recentActivities: [
        { id: `act-${Date.now()}`, type: "Crop Added", desc: "Planted field registered into CropCare", date: "Just now" }
      ]
    };

    const updated = [newCrop, ...crops];
    saveStoredCrops(updated);
    return newCrop;
  },

  async logActivity(cropId, activityData) {
    await simulateNetworkDelay(350);
    const crops = getStoredCrops();
    const updated = crops.map((crop) => {
      if (crop.id === cropId) {
        const newAct = {
          id: `act-${Date.now()}`,
          type: activityData.type || 'General Log',
          desc: activityData.desc || 'Logged field activity',
          date: 'Just now',
        };
        return {
          ...crop,
          recentActivities: [newAct, ...(crop.recentActivities || [])],
        };
      }
      return crop;
    });
    saveStoredCrops(updated);
    return updated.find((c) => c.id === cropId);
  },

  async toggleTodo(cropId, todoId) {
    const crops = getStoredCrops();
    const updated = crops.map((crop) => {
      if (crop.id === cropId) {
        return {
          ...crop,
          todos: crop.todos.map((t) =>
            t.id === todoId ? { ...t, completed: !t.completed } : t
          ),
        };
      }
      return crop;
    });
    saveStoredCrops(updated);
    return updated.find((c) => c.id === cropId);
  },

  async analyzeSoilReport(file) {
    await simulateNetworkDelay(1200);
    return {
      success: true,
      data: MOCK_SOIL_REPORT,
      message: "Soil report parsed with 99% optical accuracy."
    };
  }
};
