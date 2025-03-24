/**
 * Theme configuration for Junk Fee Killer
 * This file contains the design tokens used throughout the application
 */

const theme = {
  // Color palette
  colors: {
    primary: {
      main: '#0066cc',
      light: '#4d94ff',
      dark: '#004999',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#1a1a1a',
      light: '#4a4a4a',
      dark: '#000000',
      contrastText: '#ffffff'
    },
    success: {
      main: '#2ecc71',
      light: '#69e79e',
      dark: '#1b8047',
      contrastText: '#ffffff'
    },
    warning: {
      main: '#f39c12',
      light: '#f7bc5d',
      dark: '#b27209',
      contrastText: '#ffffff'
    },
    error: {
      main: '#e74c3c',
      light: '#ef7a6d',
      dark: '#a42f23',
      contrastText: '#ffffff'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e0e0e0',
      300: '#d0d0d0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#808080',
      700: '#6b6b6b',
      800: '#4a4a4a',
      900: '#1a1a1a'
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
      accent: 'rgba(0, 102, 204, 0.05)'
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4a4a4a',
      disabled: '#9e9e9e',
      hint: '#808080'
    }
  },

  // Typography
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      secondary: "'Playfair Display', serif",
      code: "'Roboto Mono', monospace"
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800
    },
    sizes: {
      // In rem units
      xs: 0.75,   // 12px
      sm: 0.875,  // 14px
      base: 1,    // 16px
      lg: 1.125,  // 18px
      xl: 1.25,   // 20px
      '2xl': 1.5, // 24px
      '3xl': 1.875, // 30px
      '4xl': 2.25,  // 36px
      '5xl': 3,     // 48px
      '6xl': 3.75,  // 60px
      '7xl': 4.5    // 72px
    },
    lineHeights: {
      tight: 1.1,
      snug: 1.3,
      normal: 1.5,
      relaxed: 1.6,
      loose: 1.8
    }
  },

  // Spacing
  spacing: {
    // In rem units
    '0': 0,
    '0.5': 0.125, // 2px
    '1': 0.25,    // 4px
    '2': 0.5,     // 8px
    '3': 0.75,    // 12px
    '4': 1,       // 16px
    '5': 1.25,    // 20px
    '6': 1.5,     // 24px
    '8': 2,       // 32px
    '10': 2.5,    // 40px
    '12': 3,      // 48px
    '16': 4,      // 64px
    '20': 5,      // 80px
    '24': 6,      // 96px
    '32': 8,      // 128px
    '40': 10,     // 160px
    '48': 12,     // 192px
    '56': 14,     // 224px
    '64': 16,     // 256px
  },

  // Layout
  layout: {
    maxWidth: {
      xs: '20rem',     // 320px
      sm: '30rem',     // 480px
      md: '48rem',     // 768px
      lg: '64rem',     // 1024px
      xl: '80rem',     // 1280px
      '2xl': '90rem',  // 1440px
      '3xl': '100rem', // 1600px
    },
    breakpoints: {
      xs: '0px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    }
  },

  // Borders
  borders: {
    radius: {
      none: '0',
      sm: '0.125rem',   // 2px
      base: '0.25rem',  // 4px
      md: '0.375rem',   // 6px
      lg: '0.5rem',     // 8px
      xl: '0.75rem',    // 12px
      '2xl': '1rem',    // 16px
      '3xl': '1.5rem',  // 24px
      full: '9999px'
    },
    width: {
      thin: '1px',
      normal: '2px',
      thick: '3px'
    }
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    base: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.05), 0 10px 10px rgba(0, 0, 0, 0.03)',
    '2xl': '0 25px 50px rgba(0, 0, 0, 0.07)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
    outline: '0 0 0 3px rgba(0, 102, 204, 0.3)',
    none: 'none'
  },

  // Transitions
  transitions: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms'
    },
    timing: {
      ease: 'ease',
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },

  // Aspect ratios
  aspectRatios: {
    '1/1': '1 / 1',
    '16/9': '16 / 9',
    '4/3': '4 / 3',
    '3/2': '3 / 2',
    '3/4': '3 / 4'
  },

  // Z-index scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    tooltip: 1600,
    highest: 9999
  }
};

export default theme;

// Helper functions to use the theme in components
export const getColor = (path) => {
  const pathArray = path.split('.');
  let result = theme.colors;
  
  for (const prop of pathArray) {
    if (result[prop] === undefined) return null;
    result = result[prop];
  }
  
  return result;
};

export const getSpacing = (key) => {
  return theme.spacing[key] ? `${theme.spacing[key]}rem` : null;
};

export const getFontSize = (key) => {
  return theme.typography.sizes[key] ? `${theme.typography.sizes[key]}rem` : null;
};

export const getBreakpoint = (key) => {
  return theme.layout.breakpoints[key] || null;
};

// Media query helpers
export const media = {
  up: (breakpoint) => `@media (min-width: ${theme.layout.breakpoints[breakpoint]})`,
  down: (breakpoint) => `@media (max-width: ${theme.layout.breakpoints[breakpoint]})`,
  between: (start, end) => 
    `@media (min-width: ${theme.layout.breakpoints[start]}) and (max-width: ${theme.layout.breakpoints[end]})`
};