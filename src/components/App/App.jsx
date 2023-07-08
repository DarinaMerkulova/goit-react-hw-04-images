import React, { useEffect, useState } from 'react';
import fetchImages from 'services/api';

import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Container } from './App.styled';

import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { BtnLoadMore } from 'components/Button/Button';
import { ErrorText } from 'components/HelpersText/Errors.Text/ErrorsText';
import { EmptyGallaryList } from 'components/HelpersText/Errors.Text/EmptyGalleryList/EmptyGalleryList';

const toastConfig = {
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export const App = () => {
  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [largeImage, setLargeImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const toggleModal = () => {
    setShowModal(() => !showModal);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const getLargeImage = largeImage => {
    setLargeImage(largeImage);
    toggleModal();
  };

  useEffect(() => {
    if (!name) return;
    const searchImages = async () => {
      try {
        setIsLoading(true);

        const response = await fetchImages(name, page);

        if (response.hits.length === 0) {
          return toast.info('Image not found', toastConfig);
        }
        setImages(prevImages => [...prevImages, ...response.hits]);
        setTotalPages(Math.ceil(response.totalHits / 12));
      } catch (error) {
        setError(error.message);
        toast.error(error.message, toastConfig);
      } finally {
        setIsLoading(false);
      }
    };
    searchImages();
  }, [name, page]);

  const handleSubmit = value => {
    setName(value);
    setImages([]);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorText />}
      {isLoading && <Loader />}
      {images.length > 0 ? (
        <ImageGallery images={images} getLargeImage={getLargeImage} />
      ) : (
        !isLoading && !error && <EmptyGallaryList />
      )}
      {showModal && (
        <Modal largeImage={largeImage} onCloseModal={toggleModal} />
      )}
      {images.length > 0 && totalPages !== page && !isLoading && (
        <BtnLoadMore onClick={handleLoadMore} />
      )}
    </Container>
  );
};
