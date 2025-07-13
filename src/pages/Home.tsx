import React from 'react';
import Carousel from '../components/Carousel';
import FeatureCards from '../components/FeatureCards';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f8fbff] min-h-[704px] py-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-start gap-12 h-full">
          {/* Text Block */}
          <div className="">
            <span className="inline-block mb-4 px-4 py-1 bg-brand-100 text-brand-600 rounded-md text-sm font-medium">
              Hire through referrals
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
              <span className="text-gray-900">Curated</span>{' '}
              <span className="text-brand-600">Referrals</span> by
              <br />
              <span className="text-gray-900">Expert</span>{' '}
              <span className="text-brand-600">Recruiters</span>
            </h1>

            <p className="text-gray-600 mb-6 max-w-md text-base md:text-lg">
              Post your jobs and get warm candidate to speed up your hiring
              process from expert recruiters.
            </p>

            <div className="flex gap-4 pt-8">
              <a
                href="https://app.reflense.com/"
                className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-500 transition"
              >
                Try Today
              </a>
              <a
                href="https://calendly.com/team-reflense/30min"
                className="bg-white border border-gray-200 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 text-brand-600 hover:bg-gray-50 transition"
              >
                Book Demo <span>→</span>
              </a>
            </div>
          </div>

          {/* Video on Right Side */}
          <div className="w-full">
            <video
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-auto max-h-[680px] rounded-2xl bg-[#f6faff]"
            >
              <source
                src="https://res.cloudinary.com/dbn5muylh/video/upload/v1747821385/Post_Job_2_wkvigr.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <Carousel />
      {/* Feature Cards */}
      <FeatureCards />

      {/* CTA Banner */}
      <section className="bg-[#f8fbff] py-16">
        <div className="max-w-[78rem] mx-auto bg-brand-600 text-white text-center rounded-2xl py-16 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Referrals. Results. Real-time hiring.
            <br />
            One click away.
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
      </section>
    </>
  );
};

export default Home;
