import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomeContent from './pages/HomeContent';
import Mission30 from './pages/Mission30';
import SplashScreen from './components/common/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <SplashScreen key="splash" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <Layout>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/mission30" element={<Mission30 />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
