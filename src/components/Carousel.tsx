import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';
// @ts-ignore
import 'swiper/css/navigation';

const slides = [
  {
    title: 'Speed is critical',
    heading: 'Referral hiring is 55% faster than traditional methods.',
    description:
      'Referral hires close in just 21–29 days compared to 39–55 days through job boards. Faster onboarding means less downtime.',
    buttonText: 'Get started',
    imageUrl:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1747482069/Website_Banners_1_avkyba.png',
  },
  {
    title: 'Save big per hire',
    heading: 'Global firms save up to $7,500 per hire using referral models.',
    description:
      'Referral-based hiring significantly reduces sourcing and churn costs compared to job boards or agency fees, delivering high ROI at scale.',
    buttonText: 'See pricing',
    imageUrl:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1747687823/Website_Banners_2_sfiqog.png',
  },
  {
    title: 'Retain your best hires',
    heading: '45% of referral hires stay beyond 4 years.',
    description:
      'Referred employees stick longer, reducing churn and rehiring costs by over 40%. Build lasting teams with trusted referrals.',
    buttonText: 'Build your team',
    imageUrl:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1747819281/Website_Banners_3_hfffpi.png',
  },
  {
    title: 'Hire better, faster',
    heading: 'Referral candidates are 4x more likely to be hired.',
    description:
      'Quality beats quantity—pre-vetted by industry recruiters, these candidates deliver 25% higher productivity.',
    buttonText: 'Hire now',
    imageUrl:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1747826819/Website_Banners_4_xbfhly.png',
  },
  {
    title: 'Expand reach instantly',
    heading: 'Top global firms fill up to 60% of roles via referrals.',
    description:
      'Referral programs tap into hidden talent pools, helping companies across industries hire faster and better without exhausting recruiter bandwidth.',
    buttonText: 'Explore network',
    imageUrl:
      'https://res.cloudinary.com/dbn5muylh/image/upload/v1747834901/Website_Banners_5_iwjpxe.png',
  },
];

const Carousel: React.FC = () => {
  return (
    <section className="bg-[#f1f5ff]">
      <div className="relative w-full max-w-[1440px] mx-auto px-8 sm:px-6 lg:px-12">
        {/* Navigation Arrows */}
        <div className="swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 cursor-pointer"></div>
        <div className="swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 cursor-pointer"></div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-bullet',
            bulletActiveClass: 'swiper-bullet-active',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="flex items-center justify-start min-h-[40vh] md:min-h-[50vh] rounded-2xl px-4 py-8 md:p-6 bg-cover bg-center text-left"
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              >
                <div className="backdrop-blur-sm py-2 px-6 rounded-xl max-w-lg">
                  <p className="text-brand-600 text-2xl font-semibold mb-2">
                    {slide.title}
                  </p>
                  <h2 className="text-lg md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                    {slide.heading}
                  </h2>
                  <p className="text-gray-700 mb-6">{slide.description}</p>
                  <a
                    href={
                      slide.buttonText === 'Get started' 
                        ? 'https://app.reflense.com/'
                        : slide.buttonText === 'See pricing'
                        ? '/pricing'
                        : slide.buttonText === 'Build your team'
                        ? 'https://app.reflense.com/'
                        : slide.buttonText === 'Hire now'
                        ? 'https://app.reflense.com/'
                        : slide.buttonText === 'Explore network'
                        ? 'https://app.reflense.com/'
                        : '#'
                    }
                    className="inline-block bg-brand-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-brand-500 transition"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom styles for bullets */}
      <style>
        {`
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: transparent;
            border: 1px solid #d1d5db;
            opacity: 1;
            margin: 0 4px !important;
            border-radius: 9999px;
            transition: background 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: #0671e0;
            border-color: #0671e0;
          }
        `}
      </style>
    </section>
  );
};

export default Carousel;
