import React, { useRef, useState, useEffect } from 'react';
import { AboutFeatures } from '../data/features';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeFeature = AboutFeatures[activeIndex] || {
    title: '',
    description: '',
    image: '',
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 500, behavior: 'smooth' });
  };

  useEffect(() => {
    AboutFeatures.forEach((feature) => {
      const img = new Image();
      img.src = feature.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % AboutFeatures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative -mt-4">
      <div className="bg-[linear-gradient(to_bottom,_#0671E0_60%,_white_50%)]">
        <div className="max-w-7xl mx-auto px-4 pt-24 pb-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                More than a tool.{' '}
                <span className="text-black">
                  We connects you to top-tier
                  <br />
                  recruiters, fast.
                </span>
              </h1>
              <p className="text-gray-200 max-w-2xl">
                Tap into a trusted ecosystem of vetted recruiters who deliver
                quality candidates faster, smarter, and without the usual hiring
                headaches.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <a
                href="https://app.reflense.com/"
                className="bg-white text-brand-600 font-semibold px-6 py-3 rounded-lg hover:bg-brand-500 hover:text-white transition"
              >
                Try it out
              </a>
              <a
                href="https://calendly.com/team-reflense/30min"
                className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-brand-600 transition"
              >
                Talk to sales
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-video relative shadow-lg">
            <video
              id="video"
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              poster="https://res.cloudinary.com/dbn5muylh/image/upload/v1752293608/Untitled_design_11_nnj352.png"
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/dbn5muylh/video/upload/v1752291344/Product_Vid_1_iy57x1.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <button
                onClick={handlePlay}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl"
              >
                ▶
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mt-0 mb-12">
          <h2 className="text-sm font-semibold text-brand-600 tracking-wide mb-2">
            Our Features
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            Simple, yet powerful features
          </h3>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-center mt-10">
          <div className="flex md:flex-col gap-4 md:col-span-1 justify-center">
            {AboutFeatures.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-sm px-4 py-3 rounded-lg text-left border transition ${
                  index === activeIndex
                    ? 'bg-white text-brand-600 border-brand-600'
                    : 'bg-[#f1f6fd] text-gray-700 border-transparent'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl py-8 px-4 md:px-12 lg:px-16 md:col-span-4 shadow-md min-h-[480px]">
            <h4 className="text-lg md:text-xl font-semibold text-brand-600 mb-4">
              {activeFeature.title}
            </h4>
            <p className="text-gray-600 text-base md:text-lg mb-10">
              {activeFeature.description}
            </p>
            <div className="bg-[#f1f6fd] rounded-xl overflow-hidden aspect-[8/3]">
              <img
                src={activeFeature.image}
                alt={activeFeature.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              What our clients say
            </h2>
            <div className="flex gap-2">
              <button
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollRight}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-1 -mx-1 snap-x snap-mandatory"
            ref={scrollRef}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-[320px] sm:min-w-[580px] md:min-w-[720px] bg-white rounded-2xl p-12 shadow-md snap-start flex-shrink-0"
              >
                <div className="flex flex-col md:flex-row h-full gap-6">
                  <div className="flex flex-col justify-between h-full w-[220px]">
                    <img
                      src={item.companyLogo}
                      alt="Company Logo"
                      className="h-12 mb-4 self-start"
                    />
                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={item.userImage}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-brand-600">{item.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f1f6fd] p-6 rounded-xl flex-1 max-w-[380px]">
                    <span className="text-3xl text-brand-600 block mb-2">
                      “
                    </span>
                    <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                      {item.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">
              👋 Love to hear from you! Let’s get in touch!
            </h2>
            <div className="space-y-6 text-sm text-gray-700">
              <div className="flex items-start gap-4">
                <div className="bg-[#f1f6fd] p-3 rounded-xl">📍</div>
                <div>
                  <p className="text-brand-600 font-semibold mb-1">
                    Our Location
                  </p>
                  <p>async-first,</p>
                  <p>no physical HQ.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#f1f6fd] p-3 rounded-xl">📞</div>
                <div>
                  <p className="text-brand-600 font-semibold mb-1">Phone:</p>
                  <p>+34 664 48 49 59</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#f1f6fd] p-3 rounded-xl">✉️</div>
                <div>
                  <p className="text-brand-600 font-semibold mb-1">Email:</p>
                  <p>team@reflense.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <form
              action="https://formspree.io/f/xpwdjakd"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_next"
                value="https://reflense.com/thank-you"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-800 block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-100 px-4 py-2"
                    placeholder="John Carter"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-800 block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-100 px-4 py-2"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-800 block mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full rounded-lg border border-gray-100 px-4 py-2"
                    placeholder="(123) 456 - 789"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-800 block mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full rounded-lg border border-gray-100 px-4 py-2"
                    placeholder="Facebook"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-800 block mb-1">
                  Leave us a message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-gray-100 px-4 py-2"
                  placeholder="Please type your message here..."
                />
              </div>
              <button
                type="submit"
                className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
