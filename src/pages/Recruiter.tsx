import React from 'react';
import { recruiterFeatureList } from '../data/features';

const Hiring: React.FC = () => {
  return (
    <div className="bg-[#F7F9FC] text-gray-900">
      {/* Section 1: Hero */}
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-16 grid md:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Turn Referrals into{' '}
            <span className="text-brand-600 italic">Revenue</span> — On Your
            Terms.
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Built for recruiters who want freedom, visibility, and fast payouts.
            Refer with confidence —
            <span className="italic"> and get rewarded for results.</span>
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-xl text-blue-600">✔</span>
              <span className="font-semibold">
                Choose the jobs you refer to — total flexibility, no quotas
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-blue-600">✔</span>
              <span className="font-semibold">
                Earn fixed or percentage-based payouts
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-blue-600">✔</span>
              <span className="font-semibold">
                Track referrals, scores, and payments in real-time
              </span>
            </li>
          </ul>
        </div>
        <div>
          <video
            src="https://res.cloudinary.com/dbn5muylh/video/upload/v1751158811/Recruiter_Hero_Section_3_fitxul.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl w-full max-h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Section 2: Recruiter Types */}
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-16 text-center">
        <h2 className="text-sm font-semibold text-blue-600 tracking-wide mb-2">
          Referral-First. Recruiter-Friendly.
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          The roles are real. The payouts are live. Start referring today.
        </h3>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Whether you work solo or run a full desk, there’s a space for you in
          our high-performance referral network.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              img: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1751157124/Product_Graphics_3_ppqgh8.png',
              alt: 'Independent Recruiters',
              title: 'Recruit Independently. Earn Confidently.',
              text: "Take on roles that align with your network, submit qualified talent, and grow your earnings — on your own schedule.\n\nYou're not tied to quotas or pipelines — just your own results.",
              button: 'Check latest jobs →',
            },
            {
              img: 'https://res.cloudinary.com/dbn5muylh/image/upload/v1751157706/Product_Graphics_4_fpji8l.png',
              alt: 'Staffing Agencies/Firms',
              title: 'Plug Your Team into a Live Talent Pipeline',
              text: 'Assign recruiters to open roles, streamline candidate referrals, and drive revenue from placements — with full visibility and flexibility.\n\nYour clients don’t wait. Neither should your team.',
              button: 'Start referring →',
            },
          ].map(({ img, alt, title, text, button }, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={alt}
                className="w-full max-h-[28rem] object-contain"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-black/70 to-transparent">
                <h4 className="text-xl font-bold">{title}</h4>
                <p className="text-sm mt-1 whitespace-pre-line">{text}</p>
                <a 
                  href={button === 'Check latest jobs →' ? 'https://app.reflense.com/activejoblist' : 'https://app.reflense.com/activejoblist'}
                  className="mt-4 text-sm font-semibold text-black hover:text-white transition inline-block"
                >
                  {button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Advanced Analytics */}
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-16 text-center">
        <h2 className="text-sm font-semibold text-blue-600 tracking-wide mb-2">
          Features
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Cutting‑Edge Features Built for Recruiter Success
        </h3>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Flexible, fast, and fully transparent. Make quality referrals, track
          progress, and get rewarded.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {recruiterFeatureList.map((feature, i) => (
            <div key={i} className="space-y-4 text-center">
              <img
                src={feature.img}
                alt={feature.alt}
                className="mx-auto object-contain"
              />
              <h4 className="font-bold text-lg">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-10">
          <button className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800">
            <a href="https://app.reflense.com/" className="block">Get started</a>
          </button>
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500">
            <a href="https://calendly.com/team-reflense/30min" className="block">Learn more</a>
          </button>
        </div>
      </section>

      {/* Section 4: Our Process */}
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-16 text-center">
        <h2 className="text-sm font-semibold text-blue-600 tracking-wide mb-2">
          Thousands are already earning from top referrals. Why not you?
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Get started as easy as 1, 2, 3
        </h3>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          No long forms. No complex steps. Just sign up, refer quality
          candidates, and get rewarded—quickly and transparently.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: 'Create an account',
              icon: 'person_add',
              description:
                'Register quickly with your email or LinkedIn. No contracts, no fees.',
            },
            {
              title: 'Explore & refer jobs',
              icon: 'search',
              description:
                'Browse open roles and refer people you trust—no limits or obligations.',
            },
            {
              title: 'Track referrals & get paid',
              icon: 'trending_up',
              description:
                'See real-time updates and receive payouts after successful placements.',
            },
          ].map(({ title, icon, description }, i) => (
            <div key={i} className="space-y-4">
              <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-xl">
                <span className="material-symbols-outlined text-4xl">
                  {icon}
                </span>
              </div>
              <h4 className="font-bold text-lg text-center">{title}</h4>
              <p className="text-sm text-gray-600 text-center">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hiring;
