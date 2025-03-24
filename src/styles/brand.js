/**
 * Brand identity configuration for Junk Fee Killer
 * Defines the brand typography, colors, and visual elements
 */

const brand = {
  // Brand name
  name: 'Junk Fee Killer',
  
  // Brand tagline
  tagline: 'Stop paying for fees you don\'t deserve.',
  
  // Brand description
  description: 'We help consumers identify and eliminate hidden fees in their recurring bills.',
  
  // Brand values
  values: [
    'Transparency',
    'Fairness',
    'Empowerment',
    'Innovation'
  ],
  
  // Brand color palette
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
    accent: {
      main: '#ff6b35',
      light: '#ff8d66',
      dark: '#e04e1b',
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
    neutrals: {
      white: '#ffffff',
      offWhite: '#f9f9f9',
      lightGrey: '#f0f0f0',
      mediumGrey: '#c0c0c0',
      darkGrey: '#4a4a4a',
      black: '#1a1a1a'
    }
  },
  
  // Brand typography
  typography: {
    primaryFont: "'Inter', sans-serif",
    secondaryFont: "'Playfair Display', serif",
    monoFont: "'Roboto Mono', monospace",
    
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800
    },
    
    // Typography scale for different headings and text elements
    scale: {
      h1: {
        size: '3.5rem',
        weight: 700,
        lineHeight: 1.2,
        font: 'secondary',
        letterSpacing: '-0.01em'
      },
      h2: {
        size: '2.5rem',
        weight: 700,
        lineHeight: 1.2,
        font: 'secondary',
        letterSpacing: '-0.01em'
      },
      h3: {
        size: '1.75rem',
        weight: 600,
        lineHeight: 1.3,
        font: 'primary',
        letterSpacing: '-0.01em'
      },
      h4: {
        size: '1.5rem',
        weight: 600,
        lineHeight: 1.3,
        font: 'primary',
        letterSpacing: '-0.01em'
      },
      h5: {
        size: '1.25rem',
        weight: 600,
        lineHeight: 1.4,
        font: 'primary',
        letterSpacing: '-0.01em'
      },
      h6: {
        size: '1rem',
        weight: 600,
        lineHeight: 1.4,
        font: 'primary',
        letterSpacing: '0'
      },
      body1: {
        size: '1.125rem',
        weight: 400,
        lineHeight: 1.6,
        font: 'primary',
        letterSpacing: '0'
      },
      body2: {
        size: '1rem',
        weight: 400,
        lineHeight: 1.6,
        font: 'primary',
        letterSpacing: '0'
      },
      subtitle1: {
        size: '1.125rem',
        weight: 500,
        lineHeight: 1.5,
        font: 'primary',
        letterSpacing: '0'
      },
      subtitle2: {
        size: '0.875rem',
        weight: 500,
        lineHeight: 1.5,
        font: 'primary',
        letterSpacing: '0.01em'
      },
      button: {
        size: '1rem',
        weight: 500,
        lineHeight: 1.5,
        font: 'primary',
        letterSpacing: '0.02em',
        textTransform: 'none'
      },
      caption: {
        size: '0.875rem',
        weight: 400,
        lineHeight: 1.5,
        font: 'primary',
        letterSpacing: '0.01em'
      },
      overline: {
        size: '0.75rem',
        weight: 600,
        lineHeight: 1.5,
        font: 'primary',
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      }
    }
  },
  
  // Brand imagery guidance
  imagery: {
    photoStyle: 'Clean, modern photography with natural lighting and minimal editing',
    illustrations: 'Flat, geometric illustrations with clear lines and accent colors',
    iconStyle: 'Simple, outlined icons with rounded corners',
    patterns: 'Subtle geometric patterns using brand colors at low opacity'
  },
  
  // Logo options
  logo: {
    primary: '/logo-primary.svg',
    light: '/logo-light.svg',
    dark: '/logo-dark.svg',
    mark: '/logo-mark.svg',
    favicon: '/favicon.ico'
  },
  
  // Brand voice and tone
  voice: {
    traits: [
      'Clear and straightforward',
      'Knowledgeable but not condescending',
      'Empowering and supportive',
      'Conversational but professional'
    ],
    tone: 'Friendly, helpful, and trustworthy. We speak directly to users without jargon or unnecessary complexity.',
    examples: {
      headlines: [
        'Stop paying for fees you don\'t deserve.',
        'Take back control of your bills.',
        'The average American pays $750 in hidden fees every year.'
      ],
      subheadlines: [
        'Our intelligent system finds and fights the fees you shouldn\'t be paying.',
        'Upload a bill. We\'ll find the hidden charges. Save money every month.',
        'Join thousands of smart consumers who are keeping more of their hard-earned money.'
      ]
    }
  },
  
  // Motion and animation principles
  motion: {
    principles: [
      'Smooth and purposeful transitions',
      'Natural, physics-based animations',
      'Subtle feedback for interactions',
      'Progressive reveals on scroll'
    ],
    timing: {
      fast: '150ms',
      standard: '300ms',
      emphasis: '500ms'
    },
    easing: {
      standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
      decelerate: 'cubic-bezier(0, 0, 0.2, 1)',
      accelerate: 'cubic-bezier(0.4, 0, 1, 1)'
    }
  }
};

export default brand;

// Helper functions for using brand values
export const getBrandColor = (path) => {
  const pathArray = path.split('.');
  let result = brand.colors;
  
  for (const prop of pathArray) {
    if (result[prop] === undefined) return null;
    result = result[prop];
  }
  
  return result;
};

export const getBrandFont = (type = 'primary') => {
  switch (type) {
    case 'secondary':
      return brand.typography.secondaryFont;
    case 'mono':
      return brand.typography.monoFont;
    case 'primary':
    default:
      return brand.typography.primaryFont;
  }
};

export const getTypographyStyle = (variant) => {
  const style = brand.typography.scale[variant];
  if (!style) return null;
  
  const fontFamily = style.font === 'secondary' 
    ? brand.typography.secondaryFont 
    : style.font === 'mono'
      ? brand.typography.monoFont
      : brand.typography.primaryFont;
  
  return {
    fontFamily,
    fontSize: style.size,
    fontWeight: style.weight,
    lineHeight: style.lineHeight,
    letterSpacing: style.letterSpacing,
    textTransform: style.textTransform || 'none'
  };
};