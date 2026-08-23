import React from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { useSettings } from '../../context/SettingsContext';
import { useToast } from '../common/Toast';
import { Sparkles, CheckCircle2, Satellite, PhoneCall, BrainCircuit } from 'lucide-react';
import confetti from 'canvas-confetti';

export const UpgradeModal = () => {
  const { isUpgradeModalOpen, setIsUpgradeModalOpen } = useSettings();
  const { addToast } = useToast();

  const handleUpgrade = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    addToast({
      title: 'Upgrade Successful!',
      message: 'Welcome to CropCare Pro tier with 24/7 agronomist support!',
      type: 'success',
    });
    setIsUpgradeModalOpen(false);
  };

  return (
    <Modal
      isOpen={isUpgradeModalOpen}
      onClose={() => setIsUpgradeModalOpen(false)}
      title="Upgrade to CropCare Pro"
      subtitle="Unlock advanced satellite monitoring and 24/7 agricultural agronomy advice"
      maxWidth="max-w-md"
    >
      <div className="flex flex-col gap-5 py-2">
        {/* Tier Card */}
        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-[#FFF8E1] border border-primary/20 rounded-2xl p-5 relative overflow-hidden">
          <div className="flex justify-between items-start mb-3">
            <div>
              <span className="px-2.5 py-1 bg-primary text-on-primary rounded-full text-xs font-bold uppercase tracking-wider">
                Pro Farmer Plan
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-primary">₹299</span>
                <span className="text-sm text-on-surface-variant">/ month</span>
              </div>
            </div>
            <div className="p-2.5 bg-primary-container text-[#FFD54F] rounded-xl shadow-xs">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-on-surface-variant">
            Covers up to 10 acres of multi-crop monitoring with priority AI processing.
          </p>
        </div>

        {/* Feature List */}
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-start gap-3 p-2.5 bg-surface-container-low rounded-xl">
            <Satellite className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-on-surface">Weekly Sentinel Satellite Imagery</p>
              <p className="text-xs text-on-surface-variant">NDVI vegetation health index refreshed every 5 days.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 bg-surface-container-low rounded-xl">
            <PhoneCall className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-on-surface">24/7 Dedicated Agronomist Hotline</p>
              <p className="text-xs text-on-surface-variant">Direct audio/WhatsApp consultation with certified agronomists.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-2.5 bg-surface-container-low rounded-xl">
            <BrainCircuit className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-on-surface">Precision Soil & Pest AI Forecasting</p>
              <p className="text-xs text-on-surface-variant">Predict pest arrivals 72 hours before local infestation.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant">
          <Button onClick={handleUpgrade} size="lg" className="w-full">
            Start 14-Day Free Trial
          </Button>
          <p className="text-center text-[11px] text-on-surface-variant opacity-75">
            Cancel anytime. No upfront payment required for demo testing.
          </p>
        </div>
      </div>
    </Modal>
  );
};
