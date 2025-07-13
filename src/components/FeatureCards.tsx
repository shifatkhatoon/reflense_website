import React from 'react';

const features = [
  {
    icon: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1747861682/Feature_Home_1_r32ieg.svg',
    label: 'No Contracts, No Complexity',
    title:
      'Start instantly. Refer or hire without legal paperwork or lengthy setup. Simple, streamlined hiring from day one.',
  },
  {
    icon: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1747924430/Product_Feature_wpdkwk.svg',
    label: 'Smarter Scoring System',
    title:
      'Prioritize with precision. Reflense scores both talent and recruiters — so you know who to trust and who to interview first.',
  },
  {
    icon: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1747929497/Product_Feature_1_oqijph.svg',
    label: 'Collaborate Without Chaos',
    title:
      'Stay in sync across every role. Real-time recruiter-manager workflows keep hiring decisions moving — no bottlenecks, no silos.',
  },
  {
    icon: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1747930837/Product_Feature_2_wmnhzy.svg',
    label: 'Privacy You Can Trust',
    title:
      'Your jobs, your referrals — all kept fully private. We ensure every interaction stays secure, discreet, and fully under your control.',
  },
  {
    icon: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1747932475/Product_Feature_3_fcnsj7.svg',
    label: 'Never Miss a Beat',
    title:
      'Smart nudges and instant updates keep the hiring flow alive — so no candidate or conversation slips through the cracks.',
  },
  {
    icon: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1747934098/Product_Feature_4_j7xkl9.svg',
    label: 'Global Ready',
    title:
      'From analytics to automation, Reflense equips you to grow fast — and hire smart across any region or industry.',
  },
];

const FeatureCards: React.FC = () => {
  return (
    <section className="bg-[#f8fbff] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Cut the Complexity. Hire Smarter with Reflense <br />
          <span className="text-brand-600">
            Powered by referrals, Driven by results.
          </span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Tap into a trusted ecosystem of vetted recruiters who deliver quality
          candidates faster, smarter, and without the usual hiring headaches.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-6 transition-transform hover:scale-[1.02] hover:shadow-md"
          >
            <div className="flex-1 flex items-center justify-center mb-2">
              <img src={feature.icon} alt="feature icon" className="h-full" />
            </div>
            <h3 className="text-lg font-semibold text-brand-600 tracking-wider mb-2">
              {feature.label}
            </h3>
            <p className="text-gray-800 font-semibold">{feature.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
