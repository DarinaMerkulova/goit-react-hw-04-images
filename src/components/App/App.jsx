import React, { Component } from 'react';
import fetchImages from 'services/api';

import { SearchBar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Container } from './App.styled';

import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { BtnLoadMore } from 'components/Button/Button';

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

export class App extends Component {
  state = {
    name: '',
    images: [],
    isLoading: false,
    error: null,
    largeImage: '',
    showModal: false,
    page: 1,
    totalPages: 0,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  getLargeImage = largeImage => {
    this.setState({ largeImage: largeImage });
    this.toggleModal();
  };
  componentDidUpdate(_, prevState) {
    const { name, page } = this.state;
    if (prevState.name !== name || prevState.page !== page) {
      this.searchImagees();
    }
  }

  searchImagees = async () => {
    const { name, page } = this.state;
    try {
      this.setState({ isLoading: true, images: [] });

       const response = await fetchImages(name, page);

      if (response.hits.length === 0) {
        return toast.info('Image not found', toastConfig);
      }
      this.setState({
        images: response.hits,
        totalPages: Math.ceil(response.totalHits / 12),
      });
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(error.message, toastConfig);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = value => {
    this.setState({ name: value });
  };

  render() {
    const { images, isLoading, largeImage, showModal, page, totalPages } =
      this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {images.length > 0 ? (
          <ImageGallery images={images} getLargeImage={this.getLargeImage} />
        ) : (
          <p
            style={{
              padding: 100,
              textAlign: 'center',
              fontSize: 30,
            }}
          >
            Image gallery is empty...
          </p>
        )}
        {showModal && (
          <Modal largeImage={largeImage} onCloseModal={this.toggleModal} />
        )}
        {images.length > 0 && totalPages !== page && !isLoading && (
          <BtnLoadMore onClick={this.handleLoadMore} />
        )}
      </Container>
    );
  }
}
