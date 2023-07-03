import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const BtnLoadMore = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Load more
    </StyledButton>
  );
};

BtnLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};