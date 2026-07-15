// Image loading logger for debugging image issues
// Logs all image loading attempts, successes, and failures

interface ImageLoadLog {
  id: string;
  url: string;
  alt: string;
  component: string;
  page: string;
  status: 'pending' | 'loaded' | 'failed';
  startTime: number;
  endTime?: number;
  duration?: number;
  error?: string;
  timestamp: string;
}

let imageLoadLog: ImageLoadLog[] = [];

export const imageLogger = {
  // Log the start of an image load
  startLoad: (url: string, alt: string, component: string) => {
    const id = `${url}-${Date.now()}`;
    const page = typeof window !== 'undefined' ? window.location.pathname : 'unknown';

    const log: ImageLoadLog = {
      id,
      url,
      alt,
      component,
      page,
      status: 'pending',
      startTime: Date.now(),
      timestamp: new Date().toISOString(),
    };

    imageLoadLog.push(log);

    console.log(
      `%c[IMAGE-LOAD-START] %c${component}`,
      'color: #00aaff; font-weight: bold;',
      'color: #00aaff;',
      {
        url,
        alt,
        page,
        id,
      }
    );

    return id;
  },

  // Log successful image load
  success: (id: string) => {
    const log = imageLoadLog.find(l => l.id === id);
    if (log) {
      log.status = 'loaded';
      log.endTime = Date.now();
      log.duration = log.endTime - log.startTime;

      console.log(
        `%c[IMAGE-LOAD-SUCCESS] %c${log.component}`,
        'color: #00ff00; font-weight: bold;',
        'color: #00ff00;',
        {
          url: log.url,
          duration: `${log.duration}ms`,
          alt: log.alt,
          id,
        }
      );
    }
  },

  // Log failed image load
  error: (id: string, error: string | Event) => {
    const log = imageLoadLog.find(l => l.id === id);
    if (log) {
      log.status = 'failed';
      log.endTime = Date.now();
      log.duration = log.endTime - log.startTime;
      log.error = typeof error === 'string' ? error : `${error.type}: ${(error as any)?.message || 'Unknown error'}`;

      console.log(
        `%c[IMAGE-LOAD-FAILED] %c${log.component}`,
        'color: #ff0000; font-weight: bold;',
        'color: #ff0000;',
        {
          url: log.url,
          error: log.error,
          duration: `${log.duration}ms`,
          alt: log.alt,
          id,
        }
      );
    }
  },

  // Get summary of all logged images
  getSummary: () => {
    const total = imageLoadLog.length;
    const loaded = imageLoadLog.filter(l => l.status === 'loaded').length;
    const failed = imageLoadLog.filter(l => l.status === 'failed').length;
    const pending = imageLoadLog.filter(l => l.status === 'pending').length;

    const summary = {
      total,
      loaded,
      failed,
      pending,
      successRate: total > 0 ? Math.round((loaded / total) * 100) : 0,
      failures: imageLoadLog.filter(l => l.status === 'failed'),
      pending: imageLoadLog.filter(l => l.status === 'pending'),
      averageLoadTime: loaded > 0
        ? Math.round(
            imageLoadLog
              .filter(l => l.status === 'loaded' && l.duration)
              .reduce((sum, l) => sum + (l.duration || 0), 0) / loaded
          )
        : 0,
    };

    console.log(
      '%c=== IMAGE LOADING SUMMARY ===',
      'color: #ffaa00; font-weight: bold; font-size: 14px;'
    );
    console.log(`Total Images: ${total}`);
    console.log(`%cLoaded: ${loaded}`, 'color: #00ff00;');
    console.log(`%cFailed: ${failed}`, failed > 0 ? 'color: #ff0000;' : 'color: #666;');
    console.log(`%cPending: ${pending}`, pending > 0 ? 'color: #ffaa00;' : 'color: #666;');
    console.log(`Success Rate: ${summary.successRate}%`);
    console.log(`Average Load Time: ${summary.averageLoadTime}ms`);

    if (summary.failures.length > 0) {
      console.log('%c❌ FAILED IMAGES:', 'color: #ff0000; font-weight: bold;');
      summary.failures.forEach(f => {
        console.log(`  • ${f.url}`);
        console.log(`    Component: ${f.component}`);
        console.log(`    Error: ${f.error}`);
        console.log(`    Alt: ${f.alt}`);
      });
    }

    if (summary.pending.length > 0) {
      console.log('%c⏳ PENDING IMAGES:', 'color: #ffaa00; font-weight: bold;');
      summary.pending.forEach(p => {
        console.log(`  • ${p.url}`);
        console.log(`    Component: ${p.component}`);
      });
    }

    return summary;
  },

  // Get all logs as JSON
  getAllLogs: () => imageLoadLog,

  // Clear logs
  clear: () => {
    imageLoadLog = [];
    console.log('%c[IMAGE-LOGGER] Logs cleared', 'color: #00aaff;');
  },

  // Export logs to console table
  table: () => {
    console.table(imageLoadLog);
  },
};

// Make logger available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).imageLogger = imageLogger;
  console.log('%c[IMAGE-LOGGER] Available at window.imageLogger', 'color: #00aaff; font-weight: bold;');
}
