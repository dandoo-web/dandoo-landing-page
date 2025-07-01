import { Suspense, useState, useEffect, useRef } from 'react';

const LazyComponent = ({ 
  importFunc, 
  fallback = null, 
  threshold = 0.1,
  rootMargin = '50px',
  children 
}) => {
  const [isInView, setIsInView] = useState(false);
  const [Component, setComponent] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          // Load the component when it comes into view
          importFunc().then((module) => {
            setComponent(() => module.default);
          });
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
  }, [importFunc, isInView, threshold, rootMargin]);

  if (!isInView) {
    return (
      <div ref={ref} className="w-full">
        {fallback || (
          <div className="w-full h-64 flex items-center justify-center bg-black/50">
            <div className="text-center">
              <div className="animate-pulse h-8 w-8 bg-white/20 rounded-full mx-auto mb-2"></div>
              <p className="text-white/50 text-sm">Loading section...</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (!Component) {
    return (
      <div ref={ref} className="w-full">
        {fallback || (
          <div className="w-full h-64 flex items-center justify-center bg-black/50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white mx-auto mb-2"></div>
              <p className="text-white/50 text-sm">Loading component...</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={ref}>
      <Suspense fallback={fallback || <div className="w-full h-64 bg-black/50 animate-pulse"></div>}>
        <Component {...(children || {})} />
      </Suspense>
    </div>
  );
};

export default LazyComponent;
