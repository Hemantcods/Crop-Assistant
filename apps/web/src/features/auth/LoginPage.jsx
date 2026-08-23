import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Sprout, Info } from 'lucide-react';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { loginWithPhone, loginWithGoogle, loginAsDemo } = useAuth();
  const { addToast } = useToast();

  const [phone, setPhone] = useState('');
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      addToast({
        title: 'Invalid Number',
        message: 'Please enter a valid 10-digit mobile number.',
        type: 'error',
      });
      return;
    }
    setIsOtpModalOpen(true);
    addToast({
      title: 'Demo OTP Sent',
      message: 'Your verification code is 1234',
      type: 'info',
    });
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e?.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 4) {
      addToast({
        title: 'Incomplete Code',
        message: 'Please enter the full 4-digit OTP.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await loginWithPhone(phone, enteredOtp);
      addToast({
        title: 'Welcome to CropCare!',
        message: 'Login successful.',
        type: 'success',
      });
      setIsOtpModalOpen(false);
      navigate('/');
    } catch (err) {
      addToast({
        title: 'Verification Failed',
        message: err.message || 'Invalid code, try 1234',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsSubmitting(true);
    try {
      await loginWithGoogle();
      addToast({
        title: 'Google Sign-In Successful',
        message: 'Logged in as Sagar.',
        type: 'success',
      });
      navigate('/');
    } catch (err) {
      addToast({
        title: 'Error',
        message: 'Google login failed.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoLogin = async () => {
    await loginAsDemo();
    addToast({
      title: 'Logged in as Sagar',
      message: 'Demo session active with live sample crops & weather.',
      type: 'success',
    });
    navigate('/');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 bg-background font-body-md text-on-background">
      {/* Atmospheric Wheat Background matching Stitch */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuClMrDlavjVlkpypSt9CNKgq73n1-3IAF6lOJknuJCxjqDQ4ygYmQnNy5Z-cvIycwndkDTEF02zoKg_yLCJoQZuzZN9rGj56UYb9hVWy8UjxrzweLVhwxEYy1Xs63mfXrVS39tqKK_jiiCSD9m6lxK1U68MOqE1vt3bflLItlLaJRKcuaoAKULtxRBo_iCP9HvL-r9HA6AWKMcgxpQ81Kkj5NuBjk2acEBJiuI5wMs4lqy-2HqeXtqckg")`,
        }}
      >
        {/* Soft overlay matching Digital Organicism aesthetic */}
        <div className="absolute inset-0 bg-background/75 backdrop-blur-xs" />
      </div>

      {/* Central Login Card */}
      <main className="relative z-10 w-full max-w-md bg-surface border border-outline-variant rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col gap-6">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center gap-2">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-[#FFD54F] flex items-center justify-center shadow-xs">
              <Sprout className="w-6 h-6 text-on-primary-container" />
            </div>
            <span className="font-headline-md text-headline-md text-primary font-bold tracking-tight text-xl">
              CropCare Pro
            </span>
          </div>
          <h1 className="font-headline-lg-mobile sm:font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold">
            Welcome to CropCare
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant text-sm">
            Your digital farming steward & AI agricultural assistant
          </p>
        </header>

        {/* Login Form */}
        <form onSubmit={handlePhoneSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="font-label-md text-label-md text-on-surface text-sm font-semibold"
              htmlFor="phone-number"
            >
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute left-0 inset-y-0 flex items-center pl-4 pr-3 border-r border-outline-variant my-2 pointer-events-none">
                <span className="font-body-md text-body-md text-on-surface-variant text-sm font-medium">
                  +91
                </span>
              </div>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-[72px] pr-4 py-3.5 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-xs text-sm"
                id="phone-number"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Enter 10-digit number"
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[56px] mt-1 bg-primary text-on-primary font-label-md text-label-md rounded-xl hover:bg-primary-container hover:text-on-primary-container active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <span>Get OTP</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>

          <div className="flex items-center gap-3 my-1">
            <div className="h-px bg-outline-variant flex-1" />
            <span className="text-label-sm text-on-surface-variant text-xs uppercase tracking-wider">
              or
            </span>
            <div className="h-px bg-outline-variant flex-1" />
          </div>

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isSubmitting}
            className="w-full h-[54px] bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-label-md text-sm rounded-xl hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xs cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Quick Demo Button */}
          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full py-3 bg-secondary-container text-on-secondary-container rounded-xl font-label-md text-label-md text-sm hover:bg-surface-container-high active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer font-semibold"
          >
            <Sparkles className="w-4 h-4 text-[#00734D]" />
            <span>Try Demo as Sagar (Farmer)</span>
          </button>
        </form>

        {/* Footer Link */}
        <footer className="text-center border-t border-outline-variant pt-4">
          <button
            type="button"
            onClick={() => setIsLearnMoreOpen(true)}
            className="font-label-md text-label-md text-sm text-primary hover:text-secondary transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Learn more about CropCare</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
              open_in_new
            </span>
          </button>
        </footer>
      </main>

      {/* OTP Verification Modal */}
      <Modal
        isOpen={isOtpModalOpen}
        onClose={() => setIsOtpModalOpen(false)}
        title="Enter Verification Code"
        subtitle={`We sent a 4-digit code to +91 ${phone}`}
        maxWidth="max-w-sm"
      >
        <form onSubmit={handleVerifyOtp} className="flex flex-col gap-5 py-2">
          <div className="flex justify-center gap-3 my-2">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength={1}
                value={otp[index]}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-14 h-14 text-center text-2xl font-bold text-primary bg-surface-container-low border-2 border-outline-variant rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
            ))}
          </div>

          <div className="p-3 bg-secondary-container/50 rounded-xl flex items-center gap-2 text-xs text-on-secondary-container">
            <Info className="w-4 h-4 shrink-0" />
            <span>Demo code is preset to <strong>1234</strong></span>
          </div>

          <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full">
            Verify & Continue
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => {
                setOtp(['1', '2', '3', '4']);
                addToast({ title: 'Code Filled', message: 'Demo code 1234 filled', type: 'info' });
              }}
              className="text-xs text-primary hover:underline font-semibold"
            >
              Fill Demo Code (1234)
            </button>
          </div>
        </form>
      </Modal>

      {/* Learn More Modal */}
      <Modal
        isOpen={isLearnMoreOpen}
        onClose={() => setIsLearnMoreOpen(false)}
        title="About CropCare Agricultural AI"
        subtitle="Empowering farmers with precision technology and digital stewardship"
      >
        <div className="flex flex-col gap-4 text-sm text-on-surface-variant py-2">
          <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-on-surface">AI-Powered Leaf Disease Detection</h4>
              <p className="text-xs mt-0.5">Detect over 50+ crop diseases within seconds with our neural vision pipeline.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl">
            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-on-surface">Localized Weather & Storm Advisories</h4>
              <p className="text-xs mt-0.5">Village-level hyper-local microclimate alerts directly on your phone and WhatsApp.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl">
            <Sprout className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-on-surface">Complete Crop Lifecycle Tracking</h4>
              <p className="text-xs mt-0.5">From seed germination to harvest maturity, manage your field acreage with ease.</p>
            </div>
          </div>

          <Button onClick={() => setIsLearnMoreOpen(false)} className="w-full mt-2">
            Got It
          </Button>
        </div>
      </Modal>
    </div>
  );
};
