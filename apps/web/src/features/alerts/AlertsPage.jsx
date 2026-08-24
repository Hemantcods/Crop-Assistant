import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlerts } from '../../context/AlertsContext';
import { useToast } from '../../components/common/Toast';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import {
  Bell,
  CloudRain,
  Bug,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Filter,
} from 'lucide-react';

export const AlertsPage = () => {
  const navigate = useNavigate();
  const { alerts, markAsRead, dismissAlert } = useAlerts();
  const { addToast } = useToast();

  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL' | 'weather' | 'disease'

  const filteredAlerts = alerts.filter((a) => {
    if (activeTab === 'ALL') return true;
    return a.type === activeTab;
  });

  const handleAction = (alert) => {
    markAsRead(alert.id);
    if (alert.type === 'weather' || alert.cropId === 'wheat') {
      navigate('/crops/wheat');
    } else if (alert.type === 'disease') {
      navigate('/diagnose');
    } else {
      addToast({
        title: alert.title,
        message: 'Advisory details marked as reviewed.',
        type: 'info',
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl sm:text-3xl text-primary font-bold">
            Farm Alerts & Advisories
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">
            Real-time weather warnings, regional disease outbreaks, and field crop advisories.
          </p>
        </div>
      </div>

      {/* Tabs Filter */}
      <div className="flex gap-2 border-b border-outline-variant pb-2 overflow-x-auto">
        {[
          { id: 'ALL', label: 'All Alerts' },
          { id: 'weather', label: 'Weather Warnings' },
          { id: 'disease', label: 'Disease & Pests' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === tab.id
                ? 'bg-primary text-on-primary shadow-xs'
                : 'text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Alerts List */}
      <div className="flex flex-col gap-3.5">
        {filteredAlerts.length === 0 ? (
          <div className="text-center py-12 bg-surface-container-lowest rounded-2xl border border-outline-variant p-6">
            <CheckCircle2 className="w-12 h-12 text-[#2E7D32] mx-auto mb-3 opacity-80" />
            <h3 className="font-bold text-on-surface text-base">No active alerts</h3>
            <p className="text-xs text-on-surface-variant mt-1">
              Your registered fields are currently within optimal parameters.
            </p>
          </div>
        ) : (
          filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start justify-between gap-4 shadow-xs ${
                alert.severity === 'error'
                  ? 'bg-[#FFF5F5] border-[#FFCDD2]'
                  : alert.severity === 'warning'
                  ? 'bg-[#FFF8E1] border-[#FFD54F]'
                  : 'bg-surface-container-lowest border-outline-variant'
              } ${!alert.isRead ? 'ring-1 ring-primary/20' : 'opacity-85'}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-2xl shrink-0 mt-0.5 ${
                    alert.severity === 'error'
                      ? 'bg-error-container text-error'
                      : alert.severity === 'warning'
                      ? 'bg-[#FFECB3] text-[#E65100]'
                      : 'bg-primary-container text-on-primary-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-[24px] fill">
                    {alert.icon || 'notifications'}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-on-surface-variant">
                      {alert.type}
                    </span>
                    <span className="text-on-surface-variant text-xs">• {alert.time}</span>
                    {!alert.isRead && (
                      <span className="px-2 py-0.5 bg-primary text-on-primary rounded-full text-[10px] font-bold">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="font-headline-md text-on-surface font-bold text-base">
                    {alert.title}
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-xs sm:text-sm mt-1 leading-relaxed max-w-2xl">
                    {alert.desc}
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0">
                <Button
                  onClick={() => handleAction(alert)}
                  size="sm"
                  variant={alert.severity === 'warning' ? 'warning' : 'primary'}
                  className="w-full sm:w-auto text-xs"
                >
                  <span>{alert.actionText || 'Take Action'}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
                <button
                  type="button"
                  onClick={() => dismissAlert(alert.id)}
                  className="text-[11px] text-on-surface-variant hover:text-on-surface hover:underline px-2 py-1 cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
