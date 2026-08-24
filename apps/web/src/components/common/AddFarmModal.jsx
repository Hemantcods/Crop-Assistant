import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';
import { Input } from './Input';
import { MapPicker } from './MapPicker';
import { useCrops } from '../../context/CropContext';
import { useToast } from './Toast';
import { MapPin, Loader2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const AddFarmModal = ({ isOpen, onClose, onSuccess }) => {
  const { addFarm } = useCrops();
  const { addToast } = useToast();

  const [farmName, setFarmName] = useState('');
  const [area, setArea] = useState('3.5');
  const [areaUnit, setAreaUnit] = useState('acre');
  const [coords, setCoords] = useState({ latitude: 18.5204, longitude: 73.8567 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleMapChange = (newCoords) => {
    setCoords({
      latitude: newCoords.latitude,
      longitude: newCoords.longitude,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!farmName.trim()) {
      addToast({
        title: 'Farm Name Required',
        message: 'Please enter a descriptive name for your farm.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const created = await addFarm({
        name: farmName.trim(),
        latitude: coords.latitude,
        longitude: coords.longitude,
        area: parseFloat(area) || 1.0,
        areaUnit,
      });

      confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
      addToast({
        title: 'Farm Registered!',
        message: `"${created.name}" has been successfully added.`,
        type: 'success',
      });

      // Reset form
      setFarmName('');
      setArea('3.5');
      setAreaUnit('acre');
      onClose();
      if (onSuccess) {
        onSuccess(created);
      }
    } catch (err) {
      addToast({
        title: 'Failed to Add Farm',
        message: err.message || 'Could not register farm. Please try again.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Farm"
      subtitle="Define farm name, area, and pinpoint exact geolocation on the map"
      maxWidth="max-w-xl"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-1">
        {/* Farm Name */}
        <Input
          label="Farm Name / Plot Name"
          placeholder="e.g. Green Valley Farm, North Acres, Shinde Plot 2"
          value={farmName}
          onChange={(e) => setFarmName(e.target.value)}
          required
          autoFocus
        />

        {/* Area & Unit */}
        <div className="grid grid-cols-2 gap-3">
          <Input
            label="Total Area"
            type="number"
            step="0.1"
            min="0.1"
            placeholder="e.g. 4.5"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
          <div>
            <label className="font-semibold text-xs text-on-surface block mb-1.5">
              Area Unit
            </label>
            <select
              value={areaUnit}
              onChange={(e) => setAreaUnit(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-3 py-2.5 text-xs text-on-surface outline-none focus:border-primary focus:bg-surface font-medium transition-all"
            >
              <option value="acre">Acres</option>
              <option value="hectare">Hectares</option>
              <option value="bigha">Bigha</option>
              <option value="guntha">Guntha</option>
            </select>
          </div>
        </div>

        {/* Map Picker */}
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="flex items-center justify-between">
            <label className="font-semibold text-xs text-on-surface flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Select Farm Location on Map</span>
            </label>
            <span className="text-[11px] text-on-surface-variant">
              Drag pin or search village
            </span>
          </div>

          <MapPicker
            latitude={coords.latitude}
            longitude={coords.longitude}
            onChange={handleMapChange}
            height="220px"
          />
        </div>

        {/* Form Action Buttons */}
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
                <span>Registering Farm...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#FFD54F]" />
                <span>Save Farm</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
