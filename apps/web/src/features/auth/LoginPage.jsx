import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../components/common/Toast';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Sprout,
  Mail,
  Lock,
  User,
  Phone,
  Globe,
} from 'lucide-react';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { signin, signup, loginWithGoogle, loginAsDemo } = useAuth();
  const { addToast } = useToast();

  // Mode: 'signin' | 'signup'
  const [authMode, setAuthMode] = useState('signin');

  // Sign In Form State
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // Sign Up Form State
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpPhone, setSignUpPhone] = useState('');
  const [signUpLanguage, setSignUpLanguage] = useState('en');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  // Handle Real Backend Sign In
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    if (!signInEmail || !signInPassword) {
      addToast({
        title: 'Missing Fields',
        message: 'Please enter both your email and password.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const user = await signin({
        email: signInEmail,
        password: signInPassword,
      });
      addToast({
        title: `Welcome back, ${user?.name || 'Farmer'}!`,
        message: 'Signed in successfully.',
        type: 'success',
      });
      navigate('/');
    } catch (err) {
      addToast({
        title: 'Sign In Failed',
        message: err.message || 'Invalid email or password.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Real Backend Sign Up
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (!signUpName || !signUpEmail || !signUpPassword) {
      addToast({
        title: 'Missing Fields',
        message: 'Please fill in all required fields.',
        type: 'error',
      });
      return;
    }

    if (signUpPassword.length < 8) {
      addToast({
        title: 'Weak Password',
        message: 'Password must be at least 8 characters long.',
        type: 'error',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const user = await signup({
        name: signUpName,
        email: signUpEmail,
        password: signUpPassword,
        phone: signUpPhone || undefined,
        language: signUpLanguage,
      });
      addToast({
        title: `Welcome to CropCare, ${user?.name || 'Farmer'}!`,
        message: 'Account created successfully.',
        type: 'success',
      });
      navigate('/');
    } catch (err) {
      addToast({
        title: 'Registration Failed',
        message: err.message || 'Could not create account.',
        type: 'error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Google OAuth
  const handleGoogleLogin = () => {
    loginWithGoogle();
  };

  // Quick Demo Login
  const handleDemoLogin = async () => {
    await loginAsDemo();
    addToast({
      title: 'Logged in as Sagar (Demo)',
      message: 'Demo session active with live sample crops & weather.',
      type: 'success',
    });
    navigate('/');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 bg-background font-body-md text-on-background">
      {/* Atmospheric Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuClMrDlavjVlkpypSt9CNKgq73n1-3IAF6lOJknuJCxjqDQ4ygYmQnNy5Z-cvIycwndkDTEF02zoKg_yLCJoQZuzZN9rGj56UYb9hVWy8UjxrzweLVhwxEYy1Xs63mfXrVS39tqKK_jiiCSD9m6lxK1U68MOqE1vt3bflLItlLaJRKcuaoAKULtxRBo_iCP9HvL-r9HA6AWKMcgxpQ81Kkj5NuBjk2acEBJiuI5wMs4lqy-2HqeXtqckg")`,
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xs" />
      </div>

      {/* Central Auth Card */}
      <main className="relative z-10 w-full max-w-md bg-surface border border-outline-variant rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-6 sm:p-8 flex flex-col gap-5">
        {/* Header Section */}
        <header className="flex flex-col items-center text-center gap-1.5">
          <div className="flex items-center justify-center gap-2 mb-1">
            <div className="w-10 h-10 rounded-xl bg-primary-container text-[#FFD54F] flex items-center justify-center shadow-xs">
              <Sprout className="w-6 h-6 text-on-primary-container" />
            </div>
            <span className="font-headline-md text-headline-md text-primary font-bold tracking-tight text-xl">
              CropCare Pro
            </span>
          </div>
          <h1 className="font-headline-lg-mobile sm:font-headline-lg text-2xl text-on-surface font-bold">
            {authMode === 'signin'
              ? 'Sign in to your Farm'
              : 'Create Farmer Account'}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant text-xs sm:text-sm">
            AI-Powered Precision Agriculture & Farm Assistant
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-surface-container-low rounded-xl border border-outline-variant">
          <button
            type="button"
            onClick={() => setAuthMode('signin')}
            className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              authMode === 'signin'
                ? 'bg-surface text-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setAuthMode('signup')}
            className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              authMode === 'signup'
                ? 'bg-surface text-primary shadow-xs'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Create Account
          </button>
        </div>

        {/* TAB 1: SIGN IN FORM */}
        {authMode === 'signin' && (
          <form onSubmit={handleSignInSubmit} className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-md text-label-md text-on-surface text-xs font-semibold"
                htmlFor="signin-email"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="signin-email"
                  type="email"
                  required
                  placeholder="farmer@cropcare.ag"
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-10 pr-4 py-3 font-body-md text-on-surface text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="font-label-md text-label-md text-on-surface text-xs font-semibold"
                htmlFor="signin-password"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="signin-password"
                  type="password"
                  required
                  placeholder="••••••••"
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-10 pr-4 py-3 font-body-md text-on-surface text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              isLoading={isSubmitting}
              className="w-full mt-1"
            >
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        )}

        {/* TAB 2: SIGN UP FORM */}
        {authMode === 'signup' && (
          <form onSubmit={handleSignUpSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label
                className="font-label-md text-label-md text-on-surface text-xs font-semibold"
                htmlFor="signup-name"
              >
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="signup-name"
                  type="text"
                  required
                  placeholder="e.g. Sagar Shinde"
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-10 pr-4 py-2.5 font-body-md text-on-surface text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                className="font-label-md text-label-md text-on-surface text-xs font-semibold"
                htmlFor="signup-email"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="signup-email"
                  type="email"
                  required
                  placeholder="farmer@cropcare.ag"
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-10 pr-4 py-2.5 font-body-md text-on-surface text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="flex flex-col gap-1">
                <label
                  className="font-label-md text-label-md text-on-surface text-xs font-semibold"
                  htmlFor="signup-phone"
                >
                  Phone (Optional)
                </label>
                <div className="relative">
                  <Phone className="w-3.5 h-3.5 text-on-surface-variant absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    id="signup-phone"
                    type="tel"
                    placeholder="9876543210"
                    maxLength={15}
                    value={signUpPhone}
                    onChange={(e) => setSignUpPhone(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-8 pr-3 py-2.5 font-body-md text-on-surface text-xs focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  className="font-label-md text-label-md text-on-surface text-xs font-semibold"
                  htmlFor="signup-lang"
                >
                  Language
                </label>
                <div className="relative">
                  <Globe className="w-3.5 h-3.5 text-on-surface-variant absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    id="signup-lang"
                    value={signUpLanguage}
                    onChange={(e) => setSignUpLanguage(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-8 pr-2 py-2.5 font-body-md text-on-surface text-xs focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all cursor-pointer"
                  >
                    <option value="en">English</option>
                    <option value="hi">हिन्दी (Hindi)</option>
                    <option value="mr">मराठी (Marathi)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label
                className="font-label-md text-label-md text-on-surface text-xs font-semibold"
                htmlFor="signup-password"
              >
                Password (min 8 chars)
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  id="signup-password"
                  type="password"
                  required
                  placeholder="At least 8 characters"
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl pl-10 pr-4 py-2.5 font-body-md text-on-surface text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              isLoading={isSubmitting}
              className="w-full mt-1"
            >
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </form>
        )}

        {/* Divider */}
        <div className="flex items-center gap-3 my-0.5">
          <div className="h-px bg-outline-variant flex-1" />
          <span className="text-label-sm text-on-surface-variant text-[11px] uppercase tracking-wider">
            or continue with
          </span>
          <div className="h-px bg-outline-variant flex-1" />
        </div>

        {/* Third-Party & Demo Auth */}
        <div className="flex flex-col gap-2.5">
          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isSubmitting}
            className="w-full h-[48px] bg-surface-container-lowest border border-outline-variant text-on-surface font-label-md text-xs sm:text-sm font-semibold rounded-xl hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xs cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
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
            className="w-full py-2.5 bg-secondary-container text-on-secondary-container rounded-xl font-label-md text-xs sm:text-sm hover:bg-surface-container-high active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
          >
            <Sparkles className="w-4 h-4 text-[#00734D]" />
            <span>Instant Demo (Preview Mode)</span>
          </button>
        </div>

        {/* Footer Link */}
        <footer className="text-center border-t border-outline-variant pt-3.5">
          <button
            type="button"
            onClick={() => setIsLearnMoreOpen(true)}
            className="font-label-md text-xs text-primary hover:text-secondary transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
          >
            <span>About CropCare Agricultural AI</span>
            <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
              open_in_new
            </span>
          </button>
        </footer>
      </main>

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
