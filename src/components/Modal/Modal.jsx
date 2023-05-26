import { useEffect } from 'react';
import { ModalOverlay, StyledModal } from './Modal.styled';
import PropTypes from 'prop-types';

export function Modal({ id, largeImageURL, handleBackdropClick }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleBackdropClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleBackdropClick]);

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      handleBackdropClick();
    }
  };

  return (
    <ModalOverlay onClick={handleBackdrop}>
      <StyledModal>
        <img
          style={{ width: '80%', margin: '0 auto' }}
          src={largeImageURL}
          alt={id}
        />
      </StyledModal>
    </ModalOverlay>
  );
}

Modal.propTypes = {
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleBackdropClick: PropTypes.func.isRequired,
};
