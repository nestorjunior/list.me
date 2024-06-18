import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { CookiesPage } from "../pages/CookiesPage";
import { HelpCenterPage } from "../pages/HelpCenterPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { PrivacyPage } from "../pages/PrivacyPage";
import { ProfilePage } from "../pages/ProfilePage";
import { SignupPage } from "../pages/SignupPage";
import { TermsPage } from "../pages/TermsPage";
import { UserPage } from "../pages/UserPage";

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
			<Route path="/user" element={<UserPage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};
