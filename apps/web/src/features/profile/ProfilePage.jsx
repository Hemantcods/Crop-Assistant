import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCrops } from '../../context/CropContext';
import { useSettings } from '../../context/SettingsContext';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Switch } from '../../components/common/Switch';
import {
  User,
  MapPin,
  Edit2,
  LogOut,
  Globe,
  Gauge,
  Phone,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { user, updateProfile, logout } = useAuth();
  const { crops } = useCrops();
  const { language, setLanguage, units, setUnits, whatsappSettings, toggleWhatsappSetting, t } =
    useSettings();
  const { addToast } = useToast();

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Edit form state
  const [name, setName] = useState(user?.name || 'Sagar');
  const [phone, setPhone] = useState(user?.phone || '9876543210');
  const [village, setVillage] = useState(user?.village || 'Shivnagar Village');
  const [district, setDistrict] = useState(user?.district || 'Pune District');
  const [farmSize, setFarmSize] = useState(user?.farmSize || 4.5);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    await updateProfile({
      name,
      phone,
      village,
      district,
      farmSize: parseFloat(farmSize) || 4.5,
    });
    addToast({
      title: 'Profile Updated',
      message: 'Your farmer profile changes have been saved.',
      type: 'success',
    });
    setIsEditProfileModalOpen(false);
  };

  const handleLogout = async () => {
    await logout();
    addToast({
      title: 'Logged Out',
      message: 'You have been safely signed out.',
      type: 'info',
    });
    navigate('/login');
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Header */}
      <header>
        <h1 className="font-headline-lg-mobile lg:font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-primary font-bold mb-1.5">
          {t('profile.title')}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm sm:text-base">
          {t('profile.subtitle')}
        </p>
      </header>

      {/* Grid Layout (Span 4 on Left, Span 8 on Right matching Stitch) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <section className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-[0_4px_12px_rgba(45,106,79,0.05)] flex flex-col items-center text-center gap-4 relative overflow-hidden">
            {/* Banner top tint */}
            <div className="absolute top-0 left-0 w-full h-24 bg-primary-container opacity-20" />

            <div className="relative mt-4">
              <img
                src={
                  user?.avatar ||
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCpFGsOlRQM1mKOtoTaCilGoFWn3k7-k3_NOTTmz0PLjC8mGi8P0ZrW5X0JkfGzo5UX48cpogxFFs-q4tlkldSV23ccraOBj-Mf_jbB-BT-_MVdi9CqBj2rOBSa_Hgtl3IppsyIp_-FcNzzG4HunL4YHcWC3Ln3I8lRal3s6Ia7P4OLHIgjNvHaumObV059qlS4rW29UZ95_KxWD16T3SNbzFdfsTLfvWijrsXEGopzaXKK1VRGrBuXRQ"
                }
                alt="Farmer Profile"
                className="w-24 h-24 rounded-full object-cover shadow-sm border-4 border-surface-container-lowest z-10 relative"
              />
              <button
                type="button"
                onClick={() => setIsEditProfileModalOpen(true)}
                aria-label="Edit Profile Picture"
                className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-md hover:bg-primary-container hover:text-on-primary-container transition-colors z-20 cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined text-[16px]">edit</span>
              </button>
            </div>

            <div className="flex flex-col gap-1 w-full z-10">
              <h2 className="font-headline-md text-headline-md text-on-surface text-xl font-bold">
                {user?.fullName || user?.name || 'Sagar Shinde'}
              </h2>
              <div className="flex items-center justify-center gap-1 text-on-surface-variant font-label-md text-xs sm:text-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  location_on
                </span>
                <span>
                  {user?.village || 'Shivnagar Village'}, {user?.district || 'Pune District'}
                </span>
              </div>
            </div>

            <div className="w-full h-px bg-outline-variant my-1" />

            {/* Farm Stats Grid */}
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="flex flex-col items-center bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/50">
                <span className="font-label-sm text-label-sm text-on-surface-variant text-xs mb-1">
                  Farm Size
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold text-lg">
                  {user?.farmSize || 4.5}{' '}
                  <span className="font-label-sm text-xs font-normal text-on-surface-variant">
                    {user?.farmUnit || 'Acres'}
                  </span>
                </span>
              </div>

              <div className="flex flex-col items-center bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/50">
                <span className="font-label-sm text-label-sm text-on-surface-variant text-xs mb-1">
                  Active Crops
                </span>
                <span className="font-headline-md text-headline-md text-secondary font-bold text-lg">
                  {crops.length}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsEditProfileModalOpen(true)}
              className="w-full mt-2 border border-outline text-on-surface-variant py-2.5 rounded-xl font-label-md text-label-md text-sm hover:bg-surface-container hover:text-on-surface transition-colors flex items-center justify-center gap-2 cursor-pointer font-semibold"
            >
              <span className="material-symbols-outlined text-[18px]">manage_accounts</span>
              <span>Edit Profile</span>
            </button>
          </section>
        </div>

        {/* Right Column: Settings & WhatsApp */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          {/* WhatsApp Card matching Stitch */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 sm:p-6 shadow-[0_4px_12px_rgba(45,106,79,0.05)]">
            <div className="flex items-center gap-3.5 mb-5">
              <div className="bg-[#25D366]/10 p-3 rounded-full flex items-center justify-center shrink-0">
                <svg
                  className="text-[#25D366] w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-on-surface text-base sm:text-lg font-bold">
                  Stay updated on WhatsApp
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-xs sm:text-sm mt-0.5">
                  Receive critical farming alerts directly on your phone.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {/* Toggle 1: Disease & Pest Alerts */}
              <div className="flex items-center justify-between p-3.5 hover:bg-surface-container-low rounded-xl transition-colors border border-outline-variant/40">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    bug_report
                  </span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface text-sm font-bold">
                      Disease & Pest Alerts
                    </h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant text-xs">
                      Immediate warnings for nearby outbreaks.
                    </p>
                  </div>
                </div>
                <Switch
                  checked={whatsappSettings.diseasePests}
                  onChange={() => toggleWhatsappSetting('diseasePests')}
                />
              </div>

              {/* Toggle 2: Weather Forecasts */}
              <div className="flex items-center justify-between p-3.5 hover:bg-surface-container-low rounded-xl transition-colors border border-outline-variant/40">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    partly_cloudy_day
                  </span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface text-sm font-bold">
                      Weather Forecasts
                    </h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant text-xs">
                      Daily summaries and severe weather warnings.
                    </p>
                  </div>
                </div>
                <Switch
                  checked={whatsappSettings.weatherForecasts}
                  onChange={() => toggleWhatsappSetting('weatherForecasts')}
                />
              </div>

              {/* Toggle 3: Crop Stage Recommendations */}
              <div className="flex items-center justify-between p-3.5 hover:bg-surface-container-low rounded-xl transition-colors border border-outline-variant/40">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    grass
                  </span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface text-sm font-bold">
                      Crop Stage Recommendations
                    </h4>
                    <p className="font-label-sm text-label-sm text-on-surface-variant text-xs">
                      Timely advice for fertilization and watering.
                    </p>
                  </div>
                </div>
                <Switch
                  checked={whatsappSettings.cropStageTips}
                  onChange={() => toggleWhatsappSetting('cropStageTips')}
                />
              </div>
            </div>

            <div className="mt-4 p-3.5 bg-surface-container-low rounded-xl flex items-start gap-2.5 border border-outline-variant/50">
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] mt-0.5">
                info
              </span>
              <p className="font-label-sm text-label-sm text-on-surface-variant text-xs">
                Messages are sent to +91 {user?.phone || '9876543210'}. To change this number, update your account settings.
              </p>
            </div>
          </section>

          {/* App Settings Card matching Stitch */}
          <section className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-5 sm:p-6 shadow-[0_4px_12px_rgba(45,106,79,0.05)]">
            <h3 className="font-headline-md text-headline-md text-on-surface text-base sm:text-lg font-bold mb-4">
              App Preferences
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Language Selector */}
              <div className="flex flex-col gap-2 p-3.5 border border-outline-variant rounded-xl hover:border-primary transition-colors bg-surface-container-low/50">
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface text-xs font-semibold">
                    Language
                  </span>
                  <Globe className="w-4 h-4 text-on-surface-variant" />
                </div>
                <select
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                    addToast({
                      title: 'Language Updated',
                      message: e.target.value === 'hi' ? 'भाषा हिन्दी में बदली गई' : 'Language set to English',
                      type: 'info',
                    });
                  }}
                  className="bg-surface-container-lowest border border-outline-variant rounded-lg py-1.5 px-2.5 text-xs font-semibold text-primary outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                >
                  <option value="en">English (UK / India)</option>
                  <option value="hi">हिन्दी (Hindi)</option>
                </select>
              </div>

              {/* Units Selector */}
              <div className="flex flex-col gap-2 p-3.5 border border-outline-variant rounded-xl hover:border-primary transition-colors bg-surface-container-low/50">
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-label-md text-on-surface text-xs font-semibold">
                    Measurement Units
                  </span>
                  <Gauge className="w-4 h-4 text-on-surface-variant" />
                </div>
                <select
                  value={units}
                  onChange={(e) => {
                    setUnits(e.target.value);
                    addToast({ title: 'Units Updated', message: `Units: ${e.target.value}`, type: 'info' });
                  }}
                  className="bg-surface-container-lowest border border-outline-variant rounded-lg py-1.5 px-2.5 text-xs font-semibold text-primary outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                >
                  <option value="Acres / Celsius">Acres / Celsius (°C)</option>
                  <option value="Hectares / Fahrenheit">Hectares / Fahrenheit (°F)</option>
                </select>
              </div>
            </div>

            {/* Log Out Button */}
            <button
              type="button"
              onClick={() => setIsLogoutModalOpen(true)}
              className="w-full mt-6 text-error font-label-md text-label-md py-3.5 rounded-xl hover:bg-error-container/60 transition-colors flex items-center justify-center gap-2 cursor-pointer font-bold text-sm"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span>Log Out</span>
            </button>
          </section>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        title="Edit Farmer Profile"
        subtitle="Update your personal details, land size, and village location"
      >
        <form onSubmit={handleSaveProfile} className="flex flex-col gap-4 py-2">
          <Input
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Mobile Phone (+91)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Village"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            />
            <Input
              label="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
          <Input
            label="Total Farm Land (Acres)"
            type="number"
            step="0.1"
            value={farmSize}
            onChange={(e) => setFarmSize(e.target.value)}
            required
          />

          <div className="flex gap-3 pt-3 border-t border-outline-variant">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsEditProfileModalOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Save Changes
            </Button>
          </div>
        </form>
      </Modal>

      {/* Logout Confirmation Modal */}
      <Modal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        title="Confirm Log Out"
        subtitle="Are you sure you want to end your current session?"
        maxWidth="max-w-sm"
      >
        <div className="flex flex-col gap-4 py-2">
          <p className="text-xs text-on-surface-variant">
            You can log back in anytime with your phone number or demo credentials.
          </p>
          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              onClick={() => setIsLogoutModalOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button variant="danger" onClick={handleLogout} className="flex-1">
              Log Out
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
