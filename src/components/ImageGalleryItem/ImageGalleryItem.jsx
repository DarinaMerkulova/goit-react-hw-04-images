import PropTypes from 'prop-types';
import { StyledImageGalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, getLargeImage }) => {
  return (
    <StyledImageGalleryItem>
      <img
        src={image.webformatURL}
        alt={image.tag}
        width="400"
        onClick={() => getLargeImage(image.largeImageURL)}
      />
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  getLargeImage: PropTypes.func.isRequired,
};
