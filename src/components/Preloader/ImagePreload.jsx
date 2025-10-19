// components/ImagePreloader.jsx
import React, { useEffect, memo } from "react";

/**
 * ImagePreloader (Visibility-Aware Hybrid Prefetcher)
 * ---------------------------------------------------
 * ✅ First visit → Preload (improves LCP)
 * ✅ Next visits → Prefetch (background fetch)
 * ✅ Reuses cache between navigations
 * ✅ Waits until section is visible before running
 * ✅ Defers until browser idle for smoother experience
 *
 * @param {Array} images - Image imports or URLs.
 * @param {string} targetSelector - CSS selector for section to observe (e.g. "#hero" or ".insights-grid")
 * @param {string} priority - 'high' | 'low' | 'auto' (default: 'high')
 * @param {string} mode - 'auto' | 'preload' | 'prefetch' (default: 'auto')
 * @param {number} delay - Delay before preloading (default: 200)
 */

const preloadedImages = new Set();
let hasPreloadedOnce = false;

const ImagePreloader = ({
  images = [],
  targetSelector = null,
  priority = "high",
  mode = "auto",
  delay = 200,
}) => {
  const getImageUrl = (src) => {
    if (typeof src === "string") return src;
    if (src?.src) return src.src;
    if (src?.default) return src.default;
    if (src?.image) return src.image;
    console.warn("Skipping preloading: unrecognized image format:", src);
    return null;
  };

  useEffect(() => {
    if (!images || images.length === 0) return;

    let observer;
    let hasStarted = false;

    const startPreloading = () => {
      if (hasStarted) return; // Avoid double runs
      hasStarted = true;

      const effectiveMode =
        mode === "auto"
          ? hasPreloadedOnce
            ? "prefetch"
            : "preload"
          : mode;

      for (const src of images) {
        const imageUrl = getImageUrl(src);
        if (!imageUrl) continue;

        if (preloadedImages.has(imageUrl)) continue;
        if (document.querySelector(`link[data-preloader="${imageUrl}"]`))
          continue;

        preloadedImages.add(imageUrl);

        const link = document.createElement("link");
        link.rel = effectiveMode;
        link.as = "image";
        link.href = imageUrl;
        link.dataset.preloader = imageUrl;
        if (effectiveMode === "preload") link.fetchpriority = priority;

        // Infer MIME type
        if (imageUrl.endsWith(".webp")) link.type = "image/webp";
        else if (imageUrl.endsWith(".avif")) link.type = "image/avif";
        else if (imageUrl.endsWith(".jpg") || imageUrl.endsWith(".jpeg"))
          link.type = "image/jpeg";
        else if (imageUrl.endsWith(".png")) link.type = "image/png";

        document.head.appendChild(link);
      }

      hasPreloadedOnce = true;
    };

    // Delay + visibility logic
    const schedulePreload = () => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(startPreloading, { timeout: delay });
      } else {
        setTimeout(startPreloading, delay);
      }
    };

    if (targetSelector) {
      const target = document.querySelector(targetSelector);
      if (target) {
        observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              schedulePreload();
              observer.disconnect();
            }
          },
          { rootMargin: "100px" } // start a bit before visible
        );
        observer.observe(target);
      } else {
        // Fallback: if element not found, just preload after delay
        schedulePreload();
      }
    } else {
      // No target specified → preload normally
      schedulePreload();
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [images, targetSelector, priority, mode, delay]);

  return null;
};

export default memo(ImagePreloader);
