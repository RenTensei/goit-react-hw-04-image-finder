import { Component } from 'react';
import { ModalOverlay, StyledModal } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.handleBackdropClick();
    }
  };

  handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.handleBackdropClick();
    }
  };

  render() {
    const { id, largeImageURL } = this.props;

    return (
      <ModalOverlay onClick={this.handleBackdrop}>
        <StyledModal>
          <img
            style={{ width: '70%', margin: '0 auto' }}
            src={largeImageURL}
            alt={id}
          />
        </StyledModal>
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  handleBackdropClick: PropTypes.func.isRequired,
};
