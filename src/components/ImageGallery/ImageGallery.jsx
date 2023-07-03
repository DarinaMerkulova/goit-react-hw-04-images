import PropTypes from 'prop-types'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export const ImageGallery = ({ images, getLargeImage }) => {
  return (
    <StyledImageGallery>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          getLargeImage={getLargeImage}
        />
      ))}
    </StyledImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      
    })
  ).isRequired,
  getLargeImage: PropTypes.func.isRequired,
}; 