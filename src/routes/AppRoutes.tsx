import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { LoginPage } from '../pages/Login';
import { SignupAccount } from '../pages/Signup';
import { Profile } from '../pages/Profile';
import { Privacy } from '../pages/Privacy';
import { Terms } from '../pages/Terms';
import { Cookies } from '../pages/Cookies';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupAccount />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/privacy" element={<Privacy />} />
			<Route path="/terms" element={<Terms />} />
			<Route path="/cookies" element={<Cookies />} />
    </Routes>
  );
};

