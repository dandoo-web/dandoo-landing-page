import { useState, useRef, useEffect } from 'react';

const LazyVideo = ({ 
  src, 
  poster, 
  className = '', 
  placeholder = null,
  threshold = 0.1,
  rootMargin = '50px',
  onLoad = () => {},
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    const currentRef = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  const handleLoadedData = () => {
    setIsLoaded(true);
    onLoad();
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <div ref={videoRef} className={`relative ${className}`}>
      {isInView && (
        <video
          src={src}
          poster={poster}
          onLoadedData={handleLoadedData}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          preload="metadata"
          {...props}
        >
          {src && <source src={src} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>
      )}
      
      {(!isInView || !isLoaded) && !error && (
        <div className={`absolute inset-0 ${className}`}>
          {placeholder || (
            <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="text-gray-400 text-sm">Loading video...</div>
            </div>
          )}
        </div>
      )}
      
      {error && (
        <div className={`absolute inset-0 bg-gray-800 flex items-center justify-center ${className}`}>
          <div className="text-gray-400 text-sm">Failed to load video</div>
        </div>
      )}
    </div>
  );
};

export default LazyVideo;
