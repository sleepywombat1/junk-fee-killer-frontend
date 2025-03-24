import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Button.css';

/**
 * Button Component
 * A versatile button component that can be used as a button element or a Link component
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button style variant (primary, secondary, outline, text)
 * @param {string} props.size - Button size (small, medium, large)
 * @param {string} props.to - If provided, button will be rendered as a Link component
 * @param {string} props.href - If provided, button will be rendered as an anchor tag
 * @param {boolean} props.fullWidth - Whether the button should take up full width
 * @param {boolean} props.disabled - Whether the button is disabled
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.leftIcon - Icon to display on the left side
 * @param {React.ReactNode} props.rightIcon - Icon to display on the right side
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  to,
  href,
  fullWidth = false,
  disabled = false,
  className = '',
  leftIcon,
  rightIcon,
  children,
  ...rest
}) => {
  // Combine all the classes
  const btnClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full-width' : '',
    disabled ? 'btn-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  // If disabled, prevent click events
  const disabledProps = disabled ? {
    onClick: (e) => e.preventDefault(),
    'aria-disabled': true,
    tabIndex: -1
  } : {};

  // Render as Link if 'to' prop is provided
  if (to && !disabled) {
    return (
      <Link to={to} className={btnClasses} {...rest}>
        {leftIcon && <span className="btn-icon btn-icon-left">{leftIcon}</span>}
        <span className="btn-text">{children}</span>
        {rightIcon && <span className="btn-icon btn-icon-right">{rightIcon}</span>}
      </Link>
    );
  }

  // Render as anchor if 'href' prop is provided
  if (href && !disabled) {
    return (
      <a href={href} className={btnClasses} {...rest}>
        {leftIcon && <span className="btn-icon btn-icon-left">{leftIcon}</span>}
        <span className="btn-text">{children}</span>
        {rightIcon && <span className="btn-icon btn-icon-right">{rightIcon}</span>}
      </a>
    );
  }

  // Render as regular button by default
  return (
    <button 
      className={btnClasses}
      disabled={disabled}
      {...disabledProps}
      {...rest}
    >
      {leftIcon && <span className="btn-icon btn-icon-left">{leftIcon}</span>}
      <span className="btn-text">{children}</span>
      {rightIcon && <span className="btn-icon btn-icon-right">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  to: PropTypes.string,
  href: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  children: PropTypes.node.isRequired
};

export default Button;