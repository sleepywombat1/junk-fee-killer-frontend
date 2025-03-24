import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

/**
 * Card Component
 * A flexible card component for displaying content in a contained, elevated box
 * 
 * @param {Object} props - Component props
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.variant - Card style variant (default, outlined, elevated)
 * @param {boolean} props.hoverable - Whether the card should have hover effects
 * @param {boolean} props.clickable - Whether the card should have click effects
 * @param {function} props.onClick - Function to call when card is clicked
 */
const Card = ({
  className = '',
  variant = 'default',
  hoverable = false,
  clickable = false,
  onClick,
  children,
  ...rest
}) => {
  // Combine all the classes
  const cardClasses = [
    'card',
    `card-${variant}`,
    hoverable ? 'card-hoverable' : '',
    clickable ? 'card-clickable' : '',
    className
  ].filter(Boolean).join(' ');

  const handleKeyDown = (e) => {
    if (clickable && onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick(e);
    }
  };

  return (
    <div
      className={cardClasses}
      onClick={clickable && onClick ? onClick : undefined}
      onKeyDown={clickable && onClick ? handleKeyDown : undefined}
      tabIndex={clickable && onClick ? 0 : undefined}
      role={clickable && onClick ? 'button' : undefined}
      {...rest}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated']),
  hoverable: PropTypes.bool,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

/**
 * Card.Header Component
 * Header section of the Card
 */
const CardHeader = ({ className = '', children, ...rest }) => {
  const headerClasses = ['card-header', className].filter(Boolean).join(' ');
  
  return (
    <div className={headerClasses} {...rest}>
      {children}
    </div>
  );
};

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

/**
 * Card.Title Component
 * Title element within the Card
 */
const CardTitle = ({ className = '', as: Component = 'h3', children, ...rest }) => {
  const titleClasses = ['card-title', className].filter(Boolean).join(' ');
  
  return (
    <Component className={titleClasses} {...rest}>
      {children}
    </Component>
  );
};

CardTitle.propTypes = {
  className: PropTypes.string,
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired
};

/**
 * Card.Content Component
 * Main content section of the Card
 */
const CardContent = ({ className = '', children, ...rest }) => {
  const contentClasses = ['card-content', className].filter(Boolean).join(' ');
  
  return (
    <div className={contentClasses} {...rest}>
      {children}
    </div>
  );
};

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

/**
 * Card.Footer Component
 * Footer section of the Card
 */
const CardFooter = ({ className = '', children, ...rest }) => {
  const footerClasses = ['card-footer', className].filter(Boolean).join(' ');
  
  return (
    <div className={footerClasses} {...rest}>
      {children}
    </div>
  );
};

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

/**
 * Card.Image Component
 * Image section of the Card
 */
const CardImage = ({ className = '', src, alt = '', position = 'top', ...rest }) => {
  const imageContainerClasses = [
    'card-image',
    `card-image-${position}`,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div className={imageContainerClasses} {...rest}>
      <img src={src} alt={alt} className="card-img" />
    </div>
  );
};

CardImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  position: PropTypes.oneOf(['top', 'bottom', 'full'])
};

// Attach the sub-components to the Card component
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Image = CardImage;

export default Card;