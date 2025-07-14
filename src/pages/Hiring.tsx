import React, { useEffect, useRef, useState } from 'react';
import { steps } from '../data/content';

const Hiring: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const updateStep = () => {
      if (!containerRef.current) return;
      const stepItems = Array.from(
        containerRef.current.querySelectorAll('.step-item')
      ) as HTMLElement[];

      const scrollMiddle = window.innerHeight / 2;

      const distances = stepItems.map((el, idx) => {
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        return { index: idx, distance: Math.abs(elCenter - scrollMiddle) };
      });

      const closest = distances.reduce((a, b) =>
        a.distance < b.distance ? a : b
      );
      setActiveStep(closest.index);
    };

    window.addEventListener('scroll', updateStep, { passive: true });
    updateStep();

    return () => window.removeEventListener('scroll', updateStep);
  }, []);

  const progressHeight = `${(activeStep / (steps.length - 1)) * 100}%`;

  return (
    <section className="bg-[#f9fbfc] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-5 gap-12 items-stretch">
          {/* Left Content */}
          <div className="md:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight max-w-2xl">
              <span className="text-brand-600 italic">For Founders</span>,
              Hiring <span className="italic">Managers</span>{' '}
              <span className="text-brand-600 italic">
                and Talent Leaders ready to scale.
              </span>
            </h1>

            <p className="text-gray-700 text-base mb-4">
              Trusted by 100+ hiring teams to deliver high-fit candidates —
              without sourcing, delays, or overhead.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mb-4">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-500 transition"
              >
                Get Referred Candidates
              </button>
            </form>

            <p className="text-sm text-gray-600">
              We care about your data in our{' '}
              <a href="#" className="underline">
                privacy policy
              </a>
              .
            </p>
          </div>

          {/* Right Checklist */}
          <div className="flex flex-col justify-end h-full md:col-span-2">
            <ul className="space-y-2 mb-8">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 text-2xl">
                  task_alt
                </span>
                <span className="text-gray-800">
                  Launch a Role, Get Referrals — Fast
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 text-2xl">
                  task_alt
                </span>
                <span className="text-gray-800">
                  Pay Only When You Hire, Not to Try
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-green-600 text-2xl">
                  task_alt
                </span>
                <span className="text-gray-800">
                  Built for Scale, Trusted for Speed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Video Section */}
      <div className="my-10 w-full px-28 bg-blue-600">
        <video
          src="https://res.cloudinary.com/dbn5muylh/video/upload/v1751733831/Hiring_Page_Video_1_hzs3ep.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-h-[500px] object-contain object-center rounded-xl"
        />
      </div>

      {/* Feature Card 1 */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-[60%_40%] gap-8">
        {/* Feature Card 1.1 */}
        <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col justify-between">
          <div className="flex justify-center mb-8">
            <img
              src="https://res.cloudinary.com/dbn5muylh/image/upload/v1751999746/Product_Graphics_S_4_o5zt7g.png"
              alt="Hire Without the Hassle"
              className="w-full h-full object-cover rounded-[inherit]"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Hire Without the Hassle
            </h3>
            <p className="text-gray-700 mb-6">
              No contracts. No subscriptions. Post unlimited jobs and start
              reviewing referral-backed candidates immediately — all for free
              until you hire.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://app.reflense.com/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
              >
                Start Hiring
              </a>
            </div>
          </div>
        </div>

        {/* Feature Card 1.2 */}
        <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col justify-between">
          <div className="flex justify-center mb-8">
            <img
              src="https://res.cloudinary.com/dbn5muylh/image/upload/v1752005651/Product_Graphics_940_x_300_px_2_nmp03r.png"
              alt="Feature 2"
              className="w-full h-full object-cover rounded-[inherit]"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Curated Matches from Trusted Recruiters
            </h3>
            <p className="text-gray-700 mb-4">
              Your job is instantly shared with vetted recruiters who earn more
              when their referrals succeed — ensuring only high-fit candidates
              land in your inbox.
            </p>
            <a
              href="https://app.reflense.com/"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Post a Job →
            </a>
          </div>
        </div>
      </div>

      {/* Feature Cards Section 2*/}
      <div className="bg-[#f9fbfc] py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500">
            Start interviews within minutes — not weeks.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Speed meets quality through our{' '}
            <span className="text-blue-600">recruiter-powered</span> referral
            model.
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8 mt-16">
          {/* Left Full-Height Card */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col justify-between">
            <div className="flex justify-center mb-6">
              <img
                src="https://res.cloudinary.com/dbn5muylh/image/upload/v1752007423/Product_Graphics_940_x_300_px_940_x_300_px_htmtmi.png"
                alt="Feature 1"
                className="w-full h-full object-cover rounded-[inherit]"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Candidate Scores + Recruiter Credibility
              </h3>
              <p className="text-gray-700 mb-6">
                Every candidate is scored by the referring recruiter. We track
                recruiter performance to help you prioritize with confidence.
              </p>
              <a
                href="https://app.reflense.com/"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Right Column: Two stacked cards */}
          <div className="flex flex-col gap-4">
            {/* Top 70% card */}
            <div className="flex-1 bg-white rounded-3xl shadow-md p-8 flex flex-col justify-between">
              <div className="flex justify-center mb-6">
                <img
                  src="https://res.cloudinary.com/dbn5muylh/image/upload/v1752007655/Product_Graphics_940_x_300_px_940_x_300_px_1_fgdswz.png"
                  alt="Feature 2"
                  className="w-full h-full object-cover rounded-[inherit]"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  No Subscription or Posting Fees
                </h3>
                <p className="text-gray-700">
                  Unlimited access. No paywalls. Hire only when you succeed.
                </p>
              </div>
            </div>

            {/* Bottom 30% card */}
            <div className="bg-white rounded-3xl shadow-md p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { text: 'Smart Matching Engine', icon: 'extension' },
                  { text: 'Built for Every Team', icon: 'diversity_3' },
                  { text: 'Instant Hiring Insights', icon: 'analytics' },
                ].map(({ text, icon }, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="bg-[#f1f6fd] rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-600 text-2xl">
                        {icon}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">
                      {text}
                    </p>
                    <a
                      href="/about#video"
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      Learn more →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="text-left mb-6">
              <p className="text-sm font-semibold text-gray-500 mb-4">
                Cut through the clutter. Get matched by experts, not algorithms.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Smarter Hiring. Designed for Decision-Makers.
              </h2>
            </div>
            <a
              href="https://app.reflense.com/"
              className="inline-block bg-gray-100 text-gray-800 px-6 py-3 mr-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Start Hiring Now
            </a>
            <a
              href="/about#video"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
            >
              See How It Works →
            </a>
          </div>

          {/* Right Timeline */}
          <div className="relative" ref={containerRef}>
            {/* Full vertical track */}
            <div className="absolute top-0 left-[28px] w-[2px] h-full bg-gray-200 z-0" />
            {/* Progress line */}
            <div
              className="absolute top-0 left-[28px] w-[2px] bg-blue-500 z-0 transition-all duration-300"
              style={{ height: progressHeight }}
            />

            <div className="space-y-12 relative z-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="step-item grid grid-cols-[56px_1fr] gap-4 items-start"
                >
                  {/* Icon */}
                  <div className="relative w-[56px] flex flex-col items-center">
                    <div className="relative z-10 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center">
                      <span className="material-symbols-outlined text-blue-600 text-2xl">
                        {step.icon}
                      </span>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* CTA Banner */}
      <div className="bg-brand-600 rounded-2xl py-16 mt-20 mx-24">
        <div className="max-w-5xl mx-auto text-center text-white px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Relying on job boards? Try referrals instead.
            <br />
            <span className="text-base md:text-xl font-normal">
              The best candidates aren’t found—they’re referred.
            </span>{' '}
          </h2>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <a
              className="px-6 py-3 bg-white text-brand-600 font-semibold rounded-lg hover:bg-gray-100"
              href="https://app.reflense.com/"
            >
              Get started
            </a>
            <a
              className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-brand-600"
              href="https://calendly.com/team-reflense/30min"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;
