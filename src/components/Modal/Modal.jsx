import React from 'react';

import { Overlay, StyledModal } from './Modal.styled';

export class Modal extends React.Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <StyledModal>
          <img src={this.props.largeImage} alt="Ghbg" />
        </StyledModal>
      </Overlay>
    );
  }
}
