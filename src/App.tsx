import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Hiring from './pages/Hiring';
import Pricing from './pages/Pricing';
import Recruiter from './pages/Recruiter';
import Community from './pages/Community';

const Blog = lazy(() => import('./pages/Blog'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
