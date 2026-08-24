import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Input } from './Input';
import { useCrops } from '../../context/CropContext';
import { useToast } from './Toast';
import { Sprout, Calendar, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AddCropModal = ({
  isOpen,
  onClose,
  farmId: initialFarmId,
  farmName,
  onSuccess,
}) => {
  const { farms, addCrop } = useCrops();
  const { addToast } = useToast();

  const [selectedFarmId, setSelectedFarmId] = useState(initialFarmId || '');
  const [name, setName] = useState('');
  const [variety, setVariety] = useState('');
  const [plantedDate, setPlantedDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [harvestedDate, setHarvestedDate] = useState('');
  const [status, setStatus] = useState('ACTIVE');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialFarmId) {
      setSelectedFarmId(initialFarmId);
    } else if (farms.length > 0 && !selectedFarmId) {
      setSelectedFarmId(farms[0].id);
    }
  }, [initialFarmId, farms]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      addToast({
        title: 'Crop Name Required',
        message: 'Please enter the crop name (e.g. Wheat, Rice, Cotton).',
        type: 'error',
      });
      return;
    }

    const targetFarmId = selectedFarmId || initialFarmId || farms[0]?.id;
    if (!targetFarmId) {
      addToast({
        title: 'Farm Required',
        message: 'Please select or create a farm before adding a crop.',
        type: 'error',
      });
      return;
    }

    if (!plantedDate) {
      addToast({
        title: 'Planted Date Required',
        message: 'Please specify the date this crop was planted.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        farmId: targetFarmId,
        name: name.trim(),
        variety: variety.trim() || 'Standard Hybrid',
        platedAt: new Date(plantedDate).toISOString(),
        harvestedAt: harvestedDate ? new Date(harvestedDate).toISOString() : undefined,
        status: status || 'ACTIVE',
      };

      const created = await addCrop(payload);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      addToast({
        title: 'Crop Registered!',
        message: `"${created.name}" successfully added to the farm.`,
        type: 'success',
      });

      // Reset form
      setName('');
      setVariety('');
      setPlantedDate(new Date().toISOString().split('T')[0]);
      setHarvestedDate('');
      setStatus('ACTIVE');
      onClose();
      if (onSuccess) {
        onSuccess(created);
      }
    } catch (err) {
      addToast({
        title: 'Registration Failed',
        message: err.message || 'Could not register crop on server.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentFarm = farms.find((f) => f.id === (selectedFarmId || initialFarmId));

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={farmName ? `Add Crop to ${farmName}` : 'Add New Field Crop'}
      subtitle="Register plot information, planting date, and crop lifecycle status"
      maxWidth="max-w-lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-1">
        {/* Farm Selection (if not pre-locked or when multiple farms exist) */}
        {!initialFarmId && farms.length > 0 && (
          <div>
            <label className="font-semibold text-xs text-on-surface block mb-1.5">
              Assign to Farm Plot
            </label>
            <select
              value={selectedFarmId}
              onChange={(e) => setSelectedFarmId(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-3 py-2.5 text-xs text-on-surface outline-none focus:border-primary focus:bg-surface font-medium transition-all"
            >
              {farms.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} ({f.area} {f.areaUnit})
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Crop Name */}
        <Input
          label="Crop Name"
          placeholder="e.g. Wheat, Rice, Cotton, Soybean, Tomato, Potato"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoFocus
        />

        {/* Variety */}
        <Input
          label="Variety / Hybrid Code"
          placeholder="e.g. Sharbati Gold HD 2967, Pusa 1121, BT Cotton RCH 659"
          value={variety}
          onChange={(e) => setVariety(e.target.value)}
        />

        {/* Planting Date & Estimated Harvest Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="font-semibold text-xs text-on-surface block mb-1.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>Planted Date *</span>
            </label>
            <input
              type="date"
              required
              value={plantedDate}
              onChange={(e) => setPlantedDate(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-3 py-2.5 text-xs text-on-surface outline-none focus:border-primary focus:bg-surface font-medium transition-all"
            />
          </div>

          <div>
            <label className="font-semibold text-xs text-on-surface block mb-1.5 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-on-surface-variant" />
              <span>Est. Harvest Date (Optional)</span>
            </label>
            <input
              type="date"
              value={harvestedDate}
              onChange={(e) => setHarvestedDate(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-3 py-2.5 text-xs text-on-surface outline-none focus:border-primary focus:bg-surface font-medium transition-all"
            />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="font-semibold text-xs text-on-surface block mb-1.5">
            Initial Status
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { val: 'ACTIVE', label: 'Active / Growing', color: 'border-primary text-primary' },
              { val: 'HARVESTED', label: 'Harvested', color: 'border-secondary text-secondary' },
              { val: 'FAILED', label: 'Failed', color: 'border-error text-error' },
            ].map((st) => (
              <button
                key={st.val}
                type="button"
                onClick={() => setStatus(st.val)}
                className={`py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center ${
                  status === st.val
                    ? 'bg-primary text-on-primary border-primary shadow-xs'
                    : 'bg-surface-container-low text-on-surface-variant border-outline-variant hover:bg-surface-container-high'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-3 border-t border-outline-variant mt-2">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            disabled={isSubmitting}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Registering...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#FFD54F]" />
                <span>Save Crop</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
