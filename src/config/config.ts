// Configuration file - sensitive data should be moved to environment variables
export const config = {
  // Public URLs (safe to expose)
  appUrl: 'https://reflense.com',
  apiUrl: import.meta.env.VITE_API_URL || 'https://api.reflense.com',
  
  // Form endpoints (should be in .env.local)
  contactFormUrl: import.meta.env.VITE_CONTACT_FORM_URL || '',
  
  // Analytics (should be in .env.local)
  gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
  
  // External services (should be in .env.local)
  cloudinaryUrl: import.meta.env.VITE_CLOUDINARY_URL || 'https://res.cloudinary.com/dbn5muylh',
  
  // Feature flags
  features: {
    analytics: false,
    contactForm: true,
    blog: true,
  }
}; 