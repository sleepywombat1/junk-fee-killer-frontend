// Add this file to src/utils/animations.js

// Scroll reveal functionality
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 150) {
        element.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  // Initial check
  revealOnScroll();
};

// Navbar scroll effect
export const initNavbarScroll = () => {
  const navbar = document.querySelector('nav');
  if (!navbar) return;
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  // Initial check
  handleScroll();
};

// Scroll indicator
export const initScrollIndicator = () => {
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'scroll-indicator';
  document.body.appendChild(scrollIndicator);
  
  const updateScrollIndicator = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollIndicator.style.width = scrolled + '%';
  };
  
  window.addEventListener('scroll', updateScrollIndicator);
};

// Image lazy loading with fade in
export const initImageLoad = () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
    
    if (img.complete) {
      img.classList.add('loaded');
    }
  });
};

// Initialize all animations
export const initAllAnimations = () => {
  initScrollReveal();
  initNavbarScroll();
  initScrollIndicator();
  initImageLoad();
};
