import React, { useState } from 'react';
import { faqs } from '../data/content';

const Pricing: React.FC = () => {
  const [billing, setBilling] = useState('Monthly');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Pricing Section */}
      <section className="py-2">
        <div className="text-center px-4">
          <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-2">
            No need to explore more features and switch to higher plans
          </h2>
          <p className="text-gray-500 mb-8">
            Single solution for your productivity
          </p>
          <div className="flex justify-center gap-4 mb-6">
            {['Monthly', 'Quarterly', 'Yearly'].map((type) => (
              <button
                key={type}
                onClick={() => setBilling(type)}
                className={`px-6 py-2 rounded-lg font-semibold border transition-all duration-200 ${
                  billing === type
                    ? 'bg-white text-brand-600 border-brand-600'
                    : 'bg-white text-gray-600 border'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 shadow text-center w-full relative flex flex-col">
              <img
                src="https://res.cloudinary.com/dbn5muylh/image/upload/v1746891078/Product_Graphics_2_pxvpwk.png"
                alt="Best Choice"
                className="absolute top-1 left-6 w-20 h-20 -rotate-12"
              />
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Free</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Plan for all users who are just starting Reflense and
                  reviewing service adoption
                </p>
                <p className="text-lg font-bold text-black mb-6">
                  Free forever
                </p>
              </div>
              <button className="mt-auto px-6 py-3 bg-brand-600 text-white rounded-full font-semibold flex justify-center items-center gap-2 mx-auto">
                <a href="https://app.reflense.com/" className="flex items-center gap-2">
                  Choose any →
                </a>
              </button>
              <ul className="mt-6 text-sm text-center space-y-2 text-gray-800 font-semibold">
                <li>Unlimited Job Posts</li>
                <li>Unlimited Referrals Posts</li>
                <li>Unlimited Interviews</li>
                <li>Your incentive amount</li>
                <li>Your incentive type (% or fixed)</li>
                <li>Your incentive pay duration—pay after probation</li>
              </ul>
            </div>

            {/* Basic Plan */}
            <div className="bg-white rounded-2xl p-8 shadow text-center w-full flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Solution for individuals who are hiring effectively through
                  Reflense
                </p>
                <div className="mb-2">
                  <span className="text-lg text-gray-500 align-top">$</span>
                  <span className="text-4xl font-bold text-gray-900">0.00</span>
                  <span className="text-sm text-gray-500 align-bottom ml-1">
                    {billing === 'Monthly'
                      ? 'per month'
                      : billing === 'Quarterly'
                      ? 'per quarter'
                      : 'per year'}
                  </span>
                </div>
                <p className="text-xs text-brand-600 mb-4">
                  You spent $0.00/{billing.toLowerCase()}
                </p>
              </div>
              <button className="mt-auto px-6 py-3 bg-brand-600 text-white rounded-full font-semibold flex justify-center items-center gap-2 mx-auto">
                <a href="https://app.reflense.com/" className="flex items-center gap-2">
                  Choose any →
                </a>
              </button>
              <ul className="mt-6 text-sm text-center space-y-2 text-gray-800 font-semibold">
                <li>Unlimited Job Posts</li>
                <li>Unlimited Referrals Posts</li>
                <li>Unlimited Interviews</li>
                <li>Your incentive amount</li>
                <li>Your incentive type (% or fixed)</li>
                <li>Your incentive pay duration—pay after probation</li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl p-8 shadow text-center w-full flex flex-col">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Premium
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  For companies who wants to hire faster and smarter
                </p>
                <div className="mb-2">
                  <span className="text-lg text-gray-500 align-top">$</span>
                  <span className="text-4xl font-bold text-gray-900">0.00</span>
                  <span className="text-sm text-gray-500 align-bottom ml-1">
                    {billing === 'Monthly'
                      ? 'per month'
                      : billing === 'Quarterly'
                      ? 'per quarter'
                      : 'per year'}
                  </span>
                </div>
                <p className="text-xs text-brand-600 mb-4">
                  You spent $0.00/{billing.toLowerCase()}
                </p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="1"
                  className="w-full h-[2px] bg-gray-200 rounded appearance-none 
                  [&::-webkit-slider-thumb]:appearance-none 
                  [&::-webkit-slider-thumb]:h-2 
                  [&::-webkit-slider-thumb]:w-4 
                  [&::-webkit-slider-thumb]:bg-brand-600 
                  [&::-webkit-slider-thumb]:rounded 
                  [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <p className="text-xs text-gray-600 mb-4">
                  Any number of users
                </p>
              </div>
              <button className="mt-auto px-6 py-3 bg-brand-600 text-white rounded-full font-semibold flex justify-center items-center gap-2 mx-auto">
                <a href="https://app.reflense.com/" className="flex items-center gap-2">
                  Choose any →
                </a>
              </button>
              <ul className="mt-6 text-sm text-center space-y-2 text-gray-800 font-semibold">
                <li>Unlimited Job Posts</li>
                <li>Unlimited Referrals Posts</li>
                <li>Unlimited Interviews</li>
                <li>Your incentive amount</li>
                <li>Your incentive type (% or fixed)</li>
                <li>Your incentive pay duration—pay after probation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-brand-600 uppercase">
              Support
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Frequently asked questions
            </h2>
            <p className="text-gray-500">
              Everything you need to know about the product and billing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 py-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900 text-left">
                    {faq.question}
                  </h3>
                  <span className="text-gray-500 text-xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-sm text-gray-600 mt-2 text-left">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gray-50 rounded-xl py-10 px-4">
            <p className="font-semibold text-gray-800 mb-2">Start Today</p>
            <p className="text-gray-500 mb-4">
              Can't find the answer you're looking for? Please chat to our
              friendly team.
            </p>
            <a
              href="https://calendly.com/team-reflense/30min"
              className="inline-block bg-brand-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-500"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;