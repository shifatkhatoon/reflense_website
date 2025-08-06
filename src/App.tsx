import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Hiring from './pages/Hiring';
import Pricing from './pages/Pricing';
import Recruiter from './pages/Recruiter';
import Community from './pages/Community';

const Blog = lazy(() => import('./pages/Blog'));

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hire" element={<Hiring />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/refer" element={<Recruiter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
