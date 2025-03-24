import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

/**
 * Loader Component
 * A versatile loading indicator with multiple variants
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Loader style variant (spinner, dots, pulse, bar)
 * @param {string} props.size - Loader size (small, medium, large)
 * @param {string} props.color - Custom color for the loader
 * @param {boolean} props.fullScreen - Whether to display the loader full screen with overlay
 * @param {string} props.text - Optional text to display with the loader
 * @param {string} props.className - Additional CSS classes
 */
const Loader = ({
  variant = 'spinner',
  size = 'medium',
  color,
  fullScreen = false,
  text,
  className = '',
  ...rest
}) => {
  // Base classes for the loader
  const loaderClasses = [
    'loader',
    `loader-${variant}`,
    `loader-${size}`,
    fullScreen ? 'loader-fullscreen' : '',
    className
  ].filter(Boolean).join(' ');

  // Custom styles if a color is provided
  const customStyle = color ? { '--loader-color': color } : {};

  // Render the appropriate loader based on variant
  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="loader-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        );
      case 'pulse':
        return <div className="loader-pulse"></div>;
      case 'bar':
        return <div className="loader-bar"><div className="loader-bar-progress"></div></div>;
      case 'spinner':
      default:
        return (
          <svg viewBox="0 0 50 50" className="loader-spinner">
            <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5"></circle>
          </svg>
        );
    }
  };

  // For full screen loaders, wrap with an overlay
  if (fullScreen) {
    return (
      <div className="loader-overlay" {...rest}>
        <div className={loaderClasses} style={customStyle}>
          {renderLoader()}
          {text && <div className="loader-text">{text}</div>}
        </div>
      </div>
    );
  }

  // For inline loaders
  return (
    <div className={loaderClasses} style={customStyle} {...rest}>
      {renderLoader()}
      {text && <div className="loader-text">{text}</div>}
    </div>
  );
};

Loader.propTypes = {
  variant: PropTypes.oneOf(['spinner', 'dots', 'pulse', 'bar']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  fullScreen: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string
};

export default Loader;