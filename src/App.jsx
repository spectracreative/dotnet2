import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomeContent from './pages/HomeContent';
import SplashScreen from './components/common/SplashScreen';
import ScrollToHash from './components/common/ScrollToHash';

function App() {
  return (
    <>
      <ScrollToHash />
      <Layout>
        <Routes>
          <Route path="/" element={<HomeContent />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
