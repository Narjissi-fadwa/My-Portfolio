import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import Navbar from './layouts/navbar';
import ErrorPage from './pages/error/error';
import SocialLinks from './layouts/socials';
import AboutPage from './pages/about/about';

const App = () => {
  return (
    <div className="min-h-screen">

      

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

    </div>
  );
};

export default App;
