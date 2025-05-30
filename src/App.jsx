import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home';
import Navbar from './layouts/navbar';
import ErrorPage from './pages/error/error';
import SocialLinks from './layouts/socials';


const App = () => {
  return (
    <div className="min-h-screen">

      

      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

    </div>
  );
};

export default App;
