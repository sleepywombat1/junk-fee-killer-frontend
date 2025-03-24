import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

/**
 * Modal Component
 * A customizable modal dialog component
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the modal is visible
 * @param {function} props.onClose - Function to call when modal is closed
 * @param {string} props.size - Modal size (small, medium, large, full)
 * @param {boolean} props.closeOnEsc - Whether to close on Escape key
 * @param {boolean} props.closeOnOverlayClick - Whether to close when clicking overlay
 * @param {string} props.className - Additional CSS classes
 */
const Modal = ({
  isOpen,
  onClose,
  size = 'medium',
  closeOnEsc = true,
  closeOnOverlayClick = true,
  className = '',
  children,
  ...rest
}) => {
  const modalRef = useRef(null);
  const modalClasses = [
    'modal-container',
    `modal-${size}`,
    className
  ].filter(Boolean).join(' ');

  // Handle Escape key press
  useEffect(() => {
    const handleEscKey = (event) => {
      if (closeOnEsc && event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = ''; // Restore scrolling when modal is closed
    };
  }, [isOpen, closeOnEsc, onClose]);

  // Handle click outside modal
  const handleOverlayClick = (event) => {
    if (closeOnOverlayClick && modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Don't render if not open
  if (!isOpen) return null;

  // Portal the modal to the body to avoid any stacking context issues
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div 
        className={modalClasses} 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        {...rest}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
  closeOnEsc: PropTypes.bool,
  closeOnOverlayClick: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

/**
 * Modal.Header Component
 * Header section of the Modal
 */
const ModalHeader = ({ className = '', children, onClose, ...rest }) => {
  const headerClasses = ['modal-header', className].filter(Boolean).join(' ');
  
  return (
    <div className={headerClasses} {...rest}>
      <div className="modal-header-content">{children}</div>
      {onClose && (
        <button 
          type="button" 
          className="modal-close-button" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </div>
  );
};

ModalHeader.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired
};

/**
 * Modal.Body Component
 * Main content section of the Modal
 */
const ModalBody = ({ className = '', children, ...rest }) => {
  const bodyClasses = ['modal-body', className].filter(Boolean).join(' ');
  
  return (
    <div className={bodyClasses} {...rest}>
      {children}
    </div>
  );
};

ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

/**
 * Modal.Footer Component
 * Footer section of the Modal
 */
const ModalFooter = ({ className = '', children, ...rest }) => {
  const footerClasses = ['modal-footer', className].filter(Boolean).join(' ');
  
  return (
    <div className={footerClasses} {...rest}>
      {children}
    </div>
  );
};

ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

// Attach the sub-components to the Modal component
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;