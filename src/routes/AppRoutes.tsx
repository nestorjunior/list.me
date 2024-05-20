import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/SignupPage';
import { ProfilePage } from '../pages/ProfilePage';
import { PrivacyPage } from '../pages/PrivacyPage';
import { TermsPage } from '../pages/TermsPage';
import { CookiesPage } from '../pages/CookiesPage';
import { HelpCenterPage } from '../pages/HelpCenterPage';
import { AboutPage } from '../pages/AboutPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
			<Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/privacy" element={<PrivacyPage />} />
			<Route path="/terms" element={<TermsPage />} />
			<Route path="/cookies" element={<CookiesPage />} />
			<Route path="/help" element={<HelpCenterPage />} />
			<Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
};

