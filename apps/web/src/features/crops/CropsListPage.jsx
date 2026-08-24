import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCrops } from '../../context/CropContext';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { AddCropModal } from '../../components/common/AddCropModal';
import { useToast } from '../../components/common/Toast';
import { Search, PlusCircle, ArrowRight } from 'lucide-react';

export const CropsListPage = () => {
  const navigate = useNavigate();
  const { crops, farms } = useCrops();
  const { addToast } = useToast();

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL'); // 'ALL' | 'Healthy' | 'Attention'
  const [isAddCropModalOpen, setIsAddCropModalOpen] = useState(false);

  const filteredCrops = crops.filter((crop) => {
    const matchesSearch =
      crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.variety?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.field?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === 'ALL' ||
      (statusFilter === 'Healthy' && crop.status === 'Healthy') ||
      (statusFilter === 'Attention' && crop.status !== 'Healthy');

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl sm:text-3xl text-primary font-bold">
            My Field Crops
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
            Manage your registered plots, active growth stages, and IoT health indicators.
          </p>
        </div>

        <Button
          onClick={() => {
            if (farms.length === 0) {
              addToast({
                title: 'No Farms Found',
                message: 'Please create a farm holding first from the Home page.',
                type: 'info',
              });
              navigate('/');
              return;
            }
            setIsAddCropModalOpen(true);
          }}
          icon={<PlusCircle className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          Add New Crop
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 bg-surface-container-lowest p-3.5 rounded-2xl border border-outline-variant shadow-xs">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search crops by name, field, or variety..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-surface-container-low pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface outline-none border border-transparent focus:border-primary focus:bg-surface-container-lowest transition-all"
          />
        </div>

        <div className="flex gap-2">
          {['ALL', 'Healthy', 'Attention'].map((filter) => (
            <button
              key={filter}
              onClick={() => setStatusFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                statusFilter === filter
                  ? 'bg-primary text-on-primary border-primary'
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant hover:bg-surface-container-high'
              }`}
            >
              {filter === 'ALL' ? 'All Plots' : filter}
            </button>
          ))}
        </div>
      </div>

      {/* Crop Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCrops.map((crop) => (
          <div
            key={crop.id}
            onClick={() => navigate(`/crops/${crop.id}`)}
            className="bg-surface border border-outline-variant rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(45,106,79,0.05)] hover:shadow-[0_8px_24px_rgba(45,106,79,0.12)] transition-all flex flex-col cursor-pointer group"
          >
            <div className="h-40 w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <img
                src={crop.imageUrl}
                alt={crop.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 z-20">
                <Badge variant={crop.status === 'Healthy' ? 'success' : 'warning'}>
                  {crop.status}
                </Badge>
              </div>
              <div className="absolute bottom-2 right-3 z-20 bg-inverse-surface/80 text-inverse-on-surface px-2 py-0.5 rounded text-[11px] font-bold">
                {crop.acres} Acres
              </div>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-headline-md text-on-surface font-bold text-base group-hover:text-primary transition-colors">
                    {crop.name}
                  </h3>
                  <p className="text-xs text-on-surface-variant">{crop.field}</p>
                </div>
                <span className="text-sm font-bold text-primary">{crop.growthPercent}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-surface-container-high rounded-full h-2 mt-1 mb-4 overflow-hidden">
                <div
                  className={`h-2 rounded-full ${
                    crop.status === 'Healthy' ? 'bg-primary' : 'bg-[#FFB300]'
                  }`}
                  style={{ width: `${crop.growthPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-on-surface-variant pt-2 border-t border-outline-variant/60 mt-auto">
                <span>Planted: {crop.plantedDate}</span>
                <span className="text-primary font-semibold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  Details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reusable Add Crop Modal */}
      <AddCropModal
        isOpen={isAddCropModalOpen}
        onClose={() => setIsAddCropModalOpen(false)}
      />
    </div>
  );
};
