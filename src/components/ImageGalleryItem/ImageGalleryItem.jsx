import { Modal } from 'components/Modal/Modal';
import { StyledGalleryItem } from './ImageGalleryItem.styled';
import { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    const { isModalOpen } = this.state;

    return (
      <StyledGalleryItem>
        <img src={webformatURL} alt={id} onClick={this.toggleModal} />
        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            id={id}
            handleBackdropClick={this.toggleModal}
          />
        )}
      </StyledGalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
