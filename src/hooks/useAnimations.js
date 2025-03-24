import { useEffect, useRef, useState } from 'react';

/**
 * useScrollAnimation Hook
 * A hook that applies animations to elements when they enter the viewport
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.animation - Animation class to apply ('fade-in', 'fade-in-up', etc.)
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for Intersection Observer
 * @param {boolean} options.once - Whether to animate only once or every time element enters viewport
 * @returns {Object} - The ref to attach to the element and animation state
 */
export const useScrollAnimation = ({
  animation = 'fade-in',
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  once = true
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observerOptions = {
      threshold,
      rootMargin
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Add animation class when visible
          const animationClass = animation.includes(' ') ? animation.split(' ') : [animation];
          animationClass.forEach(cls => {
            entry.target.classList.add(cls);
            entry.target.classList.add('visible');
          });
          
          // If once is true, unobserve after animation is triggered
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
          
          // Remove animation class when not visible (if not once)
          const animationClass = animation.includes(' ') ? animation.split(' ') : [animation];
          animationClass.forEach(cls => {
            entry.target.classList.remove(cls);
            entry.target.classList.remove('visible');
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animation, once, rootMargin, threshold]);

  return { ref, isVisible };
};

/**
 * useParallax Hook
 * A hook that creates a parallax scrolling effect for an element
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.speed - Parallax speed factor (negative values move opposite to scroll)
 * @param {string} options.direction - Parallax direction ('vertical' or 'horizontal')
 * @param {number} options.maxOffset - Maximum offset in pixels
 * @returns {Object} - The ref to attach to the element and current offset
 */
export const useParallax = ({
  speed = 0.2,
  direction = 'vertical',
  maxOffset = 100
} = {}) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2;
      
      // Calculate the parallax offset based on distance from center
      const newOffset = Math.min(
        Math.max(distanceFromCenter * speed * -1, -maxOffset),
        maxOffset
      );
      
      setOffset(newOffset);
      
      // Apply the transform style directly
      if (direction === 'vertical') {
        element.style.transform = `translateY(${newOffset}px)`;
      } else {
        element.style.transform = `translateX(${newOffset}px)`;
      }
    };

    // Initial calculation
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [direction, maxOffset, speed]);

  return { ref, offset };
};

/**
 * useTypewriter Hook
 * A hook that creates a typewriter effect for text
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.text - The text to type
 * @param {number} options.speed - Typing speed in milliseconds per character
 * @param {number} options.delay - Delay before typing starts in milliseconds
 * @param {boolean} options.loop - Whether to loop the animation
 * @param {number} options.loopDelay - Delay before looping in milliseconds
 * @returns {string} - The currently displayed text
 */
export const useTypewriter = ({
  text = '',
  speed = 50,
  delay = 0,
  loop = false,
  loopDelay = 2000
} = {}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDelayComplete, setIsDelayComplete] = useState(delay === 0);

  useEffect(() => {
    if (!isDelayComplete) {
      const delayTimer = setTimeout(() => {
        setIsDelayComplete(true);
      }, delay);
      
      return () => clearTimeout(delayTimer);
    }
    
    if (!text || currentIndex > text.length) return;
    
    const typeNextChar = () => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
        
        // If we've reached the end and loop is true, start deleting
        if (currentIndex >= text.length && loop) {
          setTimeout(() => {
            setIsDeleting(true);
          }, loopDelay);
        }
      } else {
        // Deleting
        setDisplayedText(text.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
        
        // If we've deleted everything, start typing again
        if (currentIndex <= 1) {
          setIsDeleting(false);
        }
      }
    };
    
    const typingSpeed = isDeleting ? speed / 2 : speed;
    const timer = setTimeout(typeNextChar, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [currentIndex, delay, isDelayComplete, isDeleting, loop, loopDelay, speed, text]);
  
  return displayedText;
};

/**
 * useHoverEffect Hook
 * A hook that applies effects when an element is hovered
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.effectType - Type of effect ('scale', 'glow', 'lift', 'color')
 * @param {string|Object} options.effectValue - Effect value or parameters
 * @returns {Object} - The ref to attach to the element and hover state
 */
export const useHoverEffect = ({
  effectType = 'scale',
  effectValue = null
} = {}) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleMouseEnter = () => {
      setIsHovered(true);
      
      switch (effectType) {
        case 'scale':
          element.style.transform = `scale(${effectValue || 1.05})`;
          break;
        case 'lift':
          element.style.transform = `translateY(${effectValue || '-5px'})`;
          break;
        case 'glow':
          element.style.boxShadow = effectValue || '0 0 15px rgba(0, 102, 204, 0.5)';
          break;
        case 'color':
          element.style.color = effectValue || '#0066cc';
          break;
        default:
          break;
      }
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
      
      switch (effectType) {
        case 'scale':
        case 'lift':
          element.style.transform = '';
          break;
        case 'glow':
          element.style.boxShadow = '';
          break;
        case 'color':
          element.style.color = '';
          break;
        default:
          break;
      }
    };
    
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [effectType, effectValue]);
  
  return { ref, isHovered };
};

/**
 * useStaggeredAnimation Hook
 * A hook that applies staggered animations to a list of elements
 * 
 * @param {Object} options - Configuration options
 * @param {string} options.animation - Animation class to apply
 * @param {number} options.delayBetween - Delay between each item's animation in milliseconds
 * @param {number} options.startDelay - Delay before the first animation in milliseconds
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @returns {Function} - A function to get ref for each item: getItemProps(index)
 */
export const useStaggeredAnimation = ({
  animation = 'fade-in-up',
  delayBetween = 100,
  startDelay = 0,
  threshold = 0.1
} = {}) => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);
  
  // Function to get props for each item
  const getItemProps = (index) => {
    return {
      ref: (el) => {
        if (el) itemsRef.current[index] = el;
      },
      className: 'stagger-item',
      style: {
        animationDelay: `${startDelay + (index * delayBetween)}ms`
      }
    };
  };
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const observerOptions = {
      threshold,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const handleIntersect = (entries) => {
      if (entries[0].isIntersecting) {
        itemsRef.current.forEach((item) => {
          if (item) {
            item.classList.add(animation);
            item.classList.add('visible');
          }
        });
        
        observer.unobserve(container);
      }
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    observer.observe(container);
    
    return () => {
      observer.unobserve(container);
    };
  }, [animation, threshold]);
  
  return { containerRef, getItemProps };
};

export default {
  useScrollAnimation,
  useParallax,
  useTypewriter,
  useHoverEffect,
  useStaggeredAnimation
};