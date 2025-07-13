import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isPricingPage = location.pathname === '/pricing';

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main
        className={`flex-grow ${isPricingPage ? 'pt-[80px]' : 'pt-[80px]'}`}
        style={{ backgroundColor: '#f8fbff' }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
