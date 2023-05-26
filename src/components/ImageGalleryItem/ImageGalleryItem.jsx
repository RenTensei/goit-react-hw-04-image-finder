import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { StyledGalleryItem } from './ImageGalleryItem.styled';

export function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <StyledGalleryItem>
      <img src={webformatURL} alt={id} onClick={toggleModal} />
      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          id={id}
          handleBackdropClick={toggleModal}
        />
      )}
    </StyledGalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
