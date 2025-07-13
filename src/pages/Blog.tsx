import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { blogList as rawBlogs } from '../data/blogs';
import { blogs as blogDetails } from '../data/blogs';

const Blog: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const blogsPerPage = 3;
  const maxIndex = rawBlogs.length - blogsPerPage;

  const blogs = [...rawBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const selectedBlog = blogDetails.find((b) => b.slug === slug);
  const visibleBlogs = showAll
    ? blogs
    : blogs.slice(startIndex, startIndex + blogsPerPage);
  const totalSlides = blogs.length - blogsPerPage + 1;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  if (slug && selectedBlog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <button
            onClick={() => navigate(-1)}
            className="hover:underline text-gray-700 font-medium"
          >
            All posts
          </button>
          <span className="mx-2">›</span>
          <span>{selectedBlog.category}</span>
        </div>

        {/* Blog Detail */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {selectedBlog.title}
        </h1>
        <img
          src={selectedBlog.image}
          alt={selectedBlog.title}
          className="w-full rounded-2xl mb-8"
        />

        {selectedBlog.sections.map((section, index) => (
          <div key={index} className="mb-8">
            {section.title && (
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {section.title}
              </h2>
            )}
            {section.type === 'image' ? (
              <img
                src={section.data}
                alt={section.title || `Section ${index + 1}`}
                className="w-full rounded-lg"
              />
            ) : (
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                {section.data}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <span className="text-brand-600 font-medium text-sm">Latest blogs</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Reflense Blog
        </h1>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Interviews, tips, guides, industry best practices, and news.
          </p>
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-5 py-2 rounded-lg font-semibold text-sm transition ${
              showAll
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                : 'bg-brand-100 text-brand-600 hover:bg-brand-200'
            }`}
          >
            {showAll ? 'Hide all blogs' : 'View all blogs'}
          </button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
        {visibleBlogs.map((blog) => (
          <div key={blog.id} className="group">
            <div className="group">
              <div className="aspect-[4/3] mb-4 overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center flex-wrap gap-2 mb-2">
                <span className="bg-brand-100 text-brand-600 text-xs font-medium px-3 py-1 rounded-full">
                  {blog.category}
                </span>
                <span className="text-gray-500 text-xs font-medium">
                  {blog.readTime}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {blog.excerpt}
              </p>

              {/* Only this is clickable now */}
              <Link
                to={`/blog/${blog.slug}`}
                className="text-brand-600 text-sm font-semibold inline-flex items-center gap-1"
              >
                Read blog <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {!showAll && (
        <div className="flex items-center justify-between mt-8 mb-20">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === startIndex ? 'bg-brand-600' : 'bg-gray-200'
                }`}
              ></span>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <section className="bg-brand-600 rounded-2xl py-16">
        <div className="max-w-5xl mx-auto text-center text-white px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            We’re building the future of hiring—want in?
            <br />
            <span className="text-base md:text-xl font-normal">
              Say hi or try us free—either way, we’re glad you’re here.
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
      </section>
    </div>
  );
};

export default Blog;
