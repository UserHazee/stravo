import React, { useEffect } from 'react';

const ImagePreloader = ({ images = [], priority = 'high' }) => {
  useEffect(() => {
    if (!images || images.length === 0) return;

    const links = [];

    images.forEach((src) => {
      let imageUrl;

      // --- FIX: Safely extract the URL string ---
      if (typeof src === 'string') {
        // Case 1: Direct string URL
        imageUrl = src;
      } else if (src && typeof src.src === 'string') {
        // Case 2: Vite/Webpack import object with a 'src' property
        imageUrl = src.src;
      } else if (src && typeof src.default === 'string') {
        // Case 3: Common module format with a 'default' property
        imageUrl = src.default;
      } else if (src && typeof src.image === 'string') {
        // Case 4: Custom object format with an 'image' property (to handle the specific warning data)
        imageUrl = src.image;
      } else {
        // Fallback or skip if it's neither a string nor a known object format
        console.warn('Skipping preloading: Image source is not a recognizable URL string or object:', src);
        return;
      }
      
      // If imageUrl is still undefined or empty after extraction, skip
      if (!imageUrl) return;
      // ------------------------------------------

      // Check if link already exists
      const existingLink = document.querySelector(`link[href="${imageUrl}"]`);
      if (existingLink) return;

      // Create preload link
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = imageUrl;
      link.fetchpriority = priority;
      
      // Now, .endsWith() is only called on a guaranteed string
      if (imageUrl.endsWith('.webp')) {
        link.type = 'image/webp';
      } else if (imageUrl.endsWith('.avif')) {
        link.type = 'image/avif';
      }

      document.head.appendChild(link);
      links.push(link);
    });

    // Cleanup function to remove preload links when component unmounts
    return () => {
      links.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [images, priority]);

  return null;
};

export default ImagePreloader;