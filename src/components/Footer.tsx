import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaDiscord,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const [showYouTubePopup, setShowYouTubePopup] = React.useState(false);

  const handleYouTubeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowYouTubePopup(true);
    setTimeout(() => setShowYouTubePopup(false), 3000);
  };

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61561096231061",
      icon: FaFacebookF,
      target: "_blank"
    },
    {
      href: "https://x.com/reflense",
      icon: FaTwitter,
      target: "_blank"
    },
    {
      href: "https://www.linkedin.com/company/reflense/",
      icon: FaLinkedinIn,
      target: "_blank"
    },
    {
      href: "#",
      icon: FaYoutube,
      onClick: handleYouTubeClick,
      target: "_blank"
    },
    {
      href: "https://discord.gg/xS8JvFGW",
      icon: FaDiscord,
      target: "_blank"
    }
  ];

  return (
    <footer className="bg-white text-gray-600 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left">© 2025 Reflense</p>

        <img
          src="https://res.cloudinary.com/dbn5muylh/image/upload/v1737313692/image-removebg-preview_4_k2zerv.png"
          alt="Logo"
          className="h-10"
        />

        <div className="flex gap-3 text-brand-600">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
                className="hover:text-brand-500 transition"
                onClick={link.onClick}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
      
      {/* YouTube Coming Soon Popup */}
      {showYouTubePopup && (
        <div className="absolute bottom-16 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-3 z-50">
          <p className="text-gray-500 text-sm">Coming soon</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;