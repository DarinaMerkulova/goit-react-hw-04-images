import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, StyledModal } from './Modal.styled';

export const Modal = ({ onCloseModal, largeImage }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };
  return (
    <Overlay onClick={handleOverlayClick}>
      <StyledModal>
        <img src={largeImage} alt="" />
      </StyledModal>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
