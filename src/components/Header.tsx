import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isAboutPage = location.pathname === '/about';

  const logoUrl =
    isAboutPage && !scrolled
      ? 'https://res.cloudinary.com/dbn5muylh/image/upload/v1747943168/Email_Logo_1000_x_600_px_2_nmzwyx.png' // when About page and top (blue bg)
      : isAboutPage
      ? 'https://res.cloudinary.com/dbn5muylh/image/upload/v1737313692/image-removebg-preview_4_k2zerv.png' // About page, but scrolled (white bg)
      : 'https://res.cloudinary.com/dbn5muylh/image/upload/v1737313692/image-removebg-preview_4_k2zerv.png';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm text-gray-800'
          : isAboutPage
          ? 'bg-brand-600 text-white'
          : 'bg-white text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-[20px] py-[15px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logoUrl} alt="Reflense Logo" className="h-12" />
        </Link>

        {/* Navigation */}
        <nav
          className={`hidden md:flex gap-6 text-base font-medium ${
            isAboutPage && !scrolled ? 'text-white' : 'text-gray-800'
          }`}
        >
          <Link to="/about">About</Link>
          <Link to="/hire">Hire with us</Link>
          <Link to="/refer">Refer talents</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/community">Community</Link>
        </nav>

        {/* CTA */}
        <div>
          <a
            href="https://app.reflense.com/"
            className={`font-semibold px-5 py-2 rounded-full transition ${
              isAboutPage && !scrolled
                ? 'bg-white text-brand-600 hover:bg-gray-100'
                : 'bg-brand-600 text-white hover:bg-brand-500'
            }`}
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
