'use client';

import { useEffect } from 'react';
import { imageLogger } from '@/lib/imageLogger';

/**
 * Global image tracking component
 * Monitors all image elements on the page and logs their loading status
 * Add this to the root layout to enable comprehensive image logging
 */
export function ImageTracker() {
  useEffect(() => {
    // Track all img elements on the page
    const trackImageElements = () => {
      const images = document.querySelectorAll('img');
      let trackedCount = 0;

      images.forEach((img) => {
        // Skip if already tracked
        if (img.dataset.tracked) return;

        img.dataset.tracked = 'true';
        const src = img.src || img.getAttribute('src') || 'unknown';
        const alt = img.alt || 'no-alt';
        const logId = imageLogger.startLoad(src, alt, 'img-element');
        trackedCount++;

        // Track loading events
        const onLoad = () => {
          imageLogger.success(logId);
        };

        const onError = (e: Event) => {
          imageLogger.error(logId, e);
        };

        img.addEventListener('load', onLoad, { once: true });
        img.addEventListener('error', onError, { once: true });

        // Check if image is already loaded
        if (img.complete) {
          if (img.naturalHeight === 0) {
            onError(new Event('error'));
          } else {
            onLoad();
          }
        }
      });

      if (trackedCount > 0) {
        console.log(`%c[IMAGE-TRACKER] Tracked ${trackedCount} img elements`, 'color: #00aaff;');
      }
    };

    // Initial tracking
    trackImageElements();

    // Watch for dynamically added images (Intersection Observer)
    const observer = new MutationObserver(() => {
      trackImageElements();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Log summary after page fully loads
    const logSummary = () => {
      setTimeout(() => {
        imageLogger.getSummary();
      }, 2000); // Wait for all images to load
    };

    window.addEventListener('load', logSummary);

    return () => {
      observer.disconnect();
      window.removeEventListener('load', logSummary);
    };
  }, []);

  // Add debug command to window
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).getImageReport = () => {
        console.clear();
        const summary = imageLogger.getSummary();
        return summary;
      };

      (window as any).getImageTable = () => {
        imageLogger.table();
      };

      (window as any).getFailedImages = () => {
        const logs = imageLogger.getAllLogs();
        const failed = logs.filter(l => l.status === 'failed');
        console.log('%c❌ FAILED IMAGES:', 'color: #ff0000; font-weight: bold; font-size: 14px;');
        failed.forEach(f => {
          console.log(`URL: ${f.url}`);
          console.log(`Component: ${f.component}`);
          console.log(`Error: ${f.error}`);
          console.log(`---`);
        });
        return failed;
      };

      console.log('%c📊 Image Logging Commands Available:', 'color: #00aaff; font-weight: bold;');
      console.log('  getImageReport()  - Get summary of all images');
      console.log('  getImageTable()   - View all images in table');
      console.log('  getFailedImages() - View only failed images');
      console.log('  imageLogger.getSummary()  - Direct logger access');
    }
  }, []);

  return null;
}
