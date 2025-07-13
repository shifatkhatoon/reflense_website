import React from 'react';
import { Link } from 'react-router-dom';

const Community: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Coming Soon Section */}
      <section className="bg-white text-brand-700 rounded-2xl px-6 py-12 text-center shadow-sm">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-4xl text-brand-700">
            rocket_launch
          </span>
          Coming Soon
        </h2>
        <p className="text-base md:text-lg text-gray-500 mb-6">
          We're building something incredible for the Reflense community. Stay
          tuned for events, discussions, and opportunities to connect.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Get Notified
          </button>
          <Link
            to="/"
            className="border border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Community;
