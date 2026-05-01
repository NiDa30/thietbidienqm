import { useEffect, useRef } from "react";

/**
 * Custom hook for scroll-triggered animations
 * Returns a ref to attach to elements that should animate when they come into view
 */
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
};

/**
 * Hook to observe multiple child elements
 * Returns a ref to attach to the parent container
 */
export const useScrollAnimationChildren = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      const children = currentRef.querySelectorAll(".scroll-animate");
      children.forEach((child) => observer.observe(child));
    }

    return () => {
      if (currentRef) {
        const children = currentRef.querySelectorAll(".scroll-animate");
        children.forEach((child) => observer.unobserve(child));
      }
    };
  }, [options.threshold, options.rootMargin]);

  return ref;
};
