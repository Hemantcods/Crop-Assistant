import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCrops } from '../../context/CropContext';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import {
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Plus,
  TrendingUp,
  Droplets,
  Thermometer,
  CloudRain,
  Activity,
  History,
  Leaf,
  ChevronDown,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CropDetailPage = () => {
  const { cropId } = useParams();
  const navigate = useNavigate();
  const { crops, activeCrop, setActiveCropId, logActivity, toggleTodo } = useCrops();
  const { addToast } = useToast();

  const currentCrop = crops.find((c) => c.id === cropId) || activeCrop;

  const [timeRange, setTimeRange] = useState('30'); // '30' | '7'
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [activityType, setActivityType] = useState('Irrigation');
  const [activityNotes, setActivityNotes] = useState('');

  const handleTodoToggle = async (todoId) => {
    await toggleTodo(currentCrop.id, todoId);
    addToast({
      title: 'Task Updated',
      message: 'Field activity checklist saved.',
      type: 'info',
    });
  };

  const handleLogSubmit = async (e) => {
    e.preventDefault();
    if (!activityNotes) {
      addToast({ title: 'Note Required', message: 'Please enter details of activity.', type: 'error' });
      return;
    }
    await logActivity(currentCrop.id, {
      type: activityType,
      desc: activityNotes,
    });
    confetti({ particleCount: 40, spread: 50 });
    addToast({
      title: 'Activity Logged!',
      message: `${activityType} saved to field audit history.`,
      type: 'success',
    });
    setIsLogModalOpen(false);
    setActivityNotes('');
  };

  return (

    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          {/* Active Field & Planted Tag */}
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-sm text-xs font-semibold tracking-wide uppercase">
              Active Field
            </span>
            <span className="text-on-surface-variant font-label-sm text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <span>Planted: {currentCrop.plantedDate}</span>
            </span>

            {/* Quick Switch Crop Dropdown */}
            <div className="relative inline-block ml-auto md:ml-2">
              <select
                value={currentCrop.id}
                onChange={(e) => {
                  setActiveCropId(e.target.value);
                  navigate(`/crops/${e.target.value}`);
                }}
                className="bg-surface-container-low border border-outline-variant rounded-lg text-xs font-semibold text-primary px-2.5 py-1 pr-6 cursor-pointer focus:ring-1 focus:ring-primary outline-none"
              >
                {crops.map((c) => (
                  <option key={c.id} value={c.id}>
                    Switch to: {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <h1 className="font-headline-lg-mobile md:font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-bold flex flex-wrap items-center gap-3">
            <span>{currentCrop.name}</span>
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${
                currentCrop.status === 'Healthy'
                  ? 'bg-[#e6f4ea] text-[#137333] border-[#ceead6]'
                  : 'bg-[#fff3e0] text-[#e65100] border-[#ffe0b2]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px] fill">
                {currentCrop.status === 'Healthy' ? 'check_circle' : 'warning'}
              </span>
              <span>
                {currentCrop.status} {currentCrop.healthPercent}%
              </span>
            </span>
          </h1>

          <p className="text-body-lg font-body-lg text-on-surface-variant mt-1 text-sm sm:text-base">
            {currentCrop.field} • {currentCrop.acres} Acres • Variety: {currentCrop.variety}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setIsLogModalOpen(true)}
            className="flex-1 md:flex-none py-3 px-6 border-2 border-primary text-primary rounded-xl font-label-md text-label-md font-semibold hover:bg-surface-container-low transition-colors text-center text-sm cursor-pointer shadow-xs active:scale-95"
          >
            + Log Activity
          </button>
        </div>
      </section>

      {/* Growth Stage Timeline (Exact replica of Stitch) */}
      <section className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 shadow-[0_4px_12px_rgba(45,106,79,0.05)] border border-outline-variant">
        <h2 className="font-headline-md text-headline-md text-on-surface text-lg font-bold mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[24px]">eco</span>
          <span>Growth Stage</span>
        </h2>

        <div className="relative">
          {/* Background Connecting Progress Line */}
          <div className="absolute top-1/2 left-4 right-4 h-2 bg-surface-container-highest rounded-full -translate-y-1/2 overflow-hidden hidden md:block z-0">
            <div
              className="h-full bg-primary rounded-full transition-all duration-700"
              style={{ width: `${currentCrop.growthPercent}%` }}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-6 md:gap-0">
            {currentCrop.growthStages?.map((stage, idx) => (
              <div
                key={stage.id || idx}
                className={`flex md:flex-col items-center gap-4 md:gap-2 ${
                  stage.isUpcoming ? 'opacity-60' : ''
                }`}
              >
                {/* Stage Indicator Node */}
                {stage.isCurrent ? (
                  <div className="relative flex items-center justify-center">
                    <div className="absolute -inset-2 bg-primary-container opacity-25 rounded-full animate-pulse hidden md:block" />
                    <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,108,72,0.4)] border-4 border-surface-container-lowest relative z-10">
                      <span className="material-symbols-outlined text-[24px] fill">
                        {stage.icon}
                      </span>
                    </div>
                  </div>
                ) : stage.status === 'Completed' ? (
                  <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xs">
                    <span className="material-symbols-outlined text-[20px]">
                      {stage.icon}
                    </span>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant border border-outline flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">
                      {stage.icon}
                    </span>
                  </div>
                )}

                <div className="text-left md:text-center">
                  <p
                    className={`font-label-md text-sm ${
                      stage.isCurrent
                        ? 'text-primary font-bold'
                        : 'text-on-surface font-semibold'
                    }`}
                  >
                    {stage.name}
                  </p>
                  <p
                    className={`text-xs ${
                      stage.isCurrent
                        ? 'text-secondary font-medium'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {stage.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental & Actions Grid (Matching Stitch Bento Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
        {/* Environmental Telemetry Cards (Span 8 on desktop) */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Temperature */}
          <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-[0_4px_12px_rgba(45,106,79,0.05)] flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(45,106,79,0.08)] transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#fff8e1] rounded-xl text-[#f57f17]">
                <span className="material-symbols-outlined text-[22px]">thermostat</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">
                {currentCrop.sensors.temperature.status}
              </span>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant mb-1 font-medium">Temperature</p>
              <p className="text-2xl font-extrabold font-headline-md text-on-surface">
                {currentCrop.sensors.temperature.value}
              </p>
            </div>
          </div>

          {/* Soil Moisture */}
          <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-[0_4px_12px_rgba(45,106,79,0.05)] flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(45,106,79,0.08)] transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#e1f5fe] rounded-xl text-[#0288d1]">
                <span className="material-symbols-outlined text-[22px]">water_drop</span>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">
                {currentCrop.sensors.soilMoisture.status}
              </span>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant mb-1 font-medium">Soil Moisture</p>
              <p className="text-2xl font-extrabold font-headline-md text-on-surface">
                {currentCrop.sensors.soilMoisture.value}
              </p>
            </div>
          </div>

          {/* Rain Probability */}
          <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant shadow-[0_4px_12px_rgba(45,106,79,0.05)] flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(45,106,79,0.08)] transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-[#eceff1] rounded-xl text-[#546e7a]">
                <span className="material-symbols-outlined text-[22px]">rainy</span>
              </div>
              <span className="text-xs font-bold text-[#d32f2f] bg-[#ffebee] px-2 py-0.5 rounded-full">
                {currentCrop.sensors.rainProbability.status}
              </span>
            </div>
            <div>
              <p className="text-xs text-on-surface-variant mb-1 font-medium">Rain Prob.</p>
              <p className="text-2xl font-extrabold font-headline-md text-on-surface">
                {currentCrop.sensors.rainProbability.value}
              </p>
            </div>
          </div>
        </div>

        {/* Recommended Actions / "To-Do Today" (Span 4 on desktop) */}
        <div className="md:col-span-4 bg-surface-container-low rounded-2xl p-5 sm:p-6 border border-outline-variant flex flex-col justify-between">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-surface text-base font-bold mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[22px]">
                task_alt
              </span>
              <span>To-Do Today</span>
            </h3>

            <ul className="flex flex-col gap-2.5">
              {currentCrop.todos?.map((todo) => (
                <li
                  key={todo.id}
                  onClick={() => handleTodoToggle(todo.id)}
                  className={`bg-surface-container-lowest p-3.5 rounded-xl shadow-xs border border-outline-variant flex gap-3 items-start cursor-pointer hover:bg-surface-container-highest transition-colors select-none ${
                    todo.completed ? 'opacity-60 line-through' : ''
                  }`}
                  style={{ borderLeftWidth: '4px', borderLeftColor: todo.border || '#0f5238' }}
                >
                  <div className="mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => {}} // Handled by container click
                      className="w-4 h-4 rounded text-primary focus:ring-primary cursor-pointer"
                    />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface text-xs font-bold">
                      {todo.task}
                    </p>
                    <p className="text-body-sm text-on-surface-variant text-[11px] mt-0.5">
                      {todo.note}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Health Trend Chart (Minimal interactive SVG matching Stitch) */}
      <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_4px_12px_rgba(45,106,79,0.05)] border border-outline-variant">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline-md text-headline-md text-on-surface text-lg font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">
              monitoring
            </span>
            <span>Health Index Trend</span>
          </h2>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-surface-container-low border-none rounded-lg text-xs font-semibold text-on-surface-variant py-1.5 pl-3 pr-8 focus:ring-primary cursor-pointer"
          >
            <option value="30">Last 30 Days</option>
            <option value="7">Last 7 Days</option>
          </select>
        </div>

        <div className="relative h-48 w-full">
          {/* Decorative minimal line chart using SVG */}
          <svg
            className="w-full h-full stroke-primary fill-none stroke-[0.6]"
            preserveAspectRatio="none"
            viewBox="0 0 100 30"
          >
            {/* Area under curve */}
            <path
              className="fill-primary-container opacity-10 stroke-none"
              d="M0,25 C10,22 20,28 30,15 C40,5 50,18 60,10 C70,2 80,12 100,5 L100,30 L0,30 Z"
            />
            {/* Main Trend Bezier Curve */}
            <path
              d="M0,25 C10,22 20,28 30,15 C40,5 50,18 60,10 C70,2 80,12 100,5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Data points */}
            <circle
              className="fill-primary stroke-surface-container-lowest stroke-[0.5]"
              cx="30"
              cy="15"
              r="1.2"
            />
            <circle
              className="fill-primary stroke-surface-container-lowest stroke-[0.5]"
              cx="60"
              cy="10"
              r="1.2"
            />
            <circle
              className="fill-secondary stroke-surface-container-lowest stroke-[0.5]"
              cx="100"
              cy="5"
              r="1.8"
            />
          </svg>

          {/* Y-axis labels */}
          <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-[10px] text-outline opacity-60 py-1 pointer-events-none">
            <span>100%</span>
            <span>75%</span>
            <span>50%</span>
          </div>

          {/* Floating Data Pill */}
          <div className="absolute top-2 right-4 bg-primary text-on-primary text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
            Current: {currentCrop.healthPercent}% Healthy
          </div>
        </div>
      </section>

      {/* Recent Field Audit Log */}
      <section className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant shadow-[0_4px_12px_rgba(45,106,79,0.05)]">
        <h3 className="font-headline-md text-headline-md text-on-surface text-base font-bold mb-4 flex items-center gap-2">
          <History className="w-5 h-5 text-primary" />
          <span>Field Activities & Log History</span>
        </h3>
        <div className="flex flex-col gap-2.5">
          {currentCrop.recentActivities?.map((act) => (
            <div
              key={act.id}
              className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl text-xs"
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-primary-container text-on-primary-container rounded-md font-bold text-[11px]">
                  {act.type}
                </span>
                <span className="font-medium text-on-surface">{act.desc}</span>
              </div>
              <span className="text-on-surface-variant opacity-75">{act.date}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Log Activity Modal */}
      <Modal
        isOpen={isLogModalOpen}
        onClose={() => setIsLogModalOpen(false)}
        title="Log Field Activity"
        subtitle={`Record irrigation, spraying, or observations for ${currentCrop.name}`}
      >
        <form onSubmit={handleLogSubmit} className="flex flex-col gap-4 py-2">
          <div>
            <label className="font-semibold text-xs text-on-surface block mb-1.5">
              Activity Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Irrigation', 'Fertilizer', 'Pest Spray', 'Observation', 'Pruning'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setActivityType(type)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    activityType === type
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface-container-low text-on-surface border-outline-variant'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <Input
            label="Activity Details / Note"
            placeholder="e.g. Applied 200ml Neem oil per acre via power sprayer"
            value={activityNotes}
            onChange={(e) => setActivityNotes(e.target.value)}
            required
          />

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsLogModalOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Save Log
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
