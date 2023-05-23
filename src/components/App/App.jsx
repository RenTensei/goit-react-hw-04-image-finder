import React, { Component } from 'react';

import { SearchBar } from 'components/Searchbar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'services/request';
import { Button } from 'components/Button/Button';

import { StyledApp } from './App.styled';
import { Dna } from 'react-loader-spinner';

export class App extends Component {
  state = {
    images: [],
    currentQuery: '',
    currentPage: 1,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { currentQuery } = this.state;

    if (prevState.currentQuery !== currentQuery) {
      this.setState({ images: [], isLoading: true });

      const newPage = 1;

      const data = await fetchImages(currentQuery, newPage);

      this.setState({
        images: data.hits,
        currentPage: newPage,
        isLoading: false,
      });
    }
  }

  updateQuery = newQuery => {
    this.setState({ currentQuery: newQuery, isLoading: true });
  };

  loadMore = async () => {
    const { currentQuery, currentPage } = this.state;

    this.setState({ isLoading: true });

    const nextPage = currentPage + 1;

    const data = await fetchImages(currentQuery, nextPage);

    this.setState(prevState => ({
      images: [...prevState.images, ...data.hits],
      currentPage: nextPage,
      isLoading: false,
    }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <StyledApp>
        <SearchBar onSubmit={this.updateQuery} />
        <ImageGallery images={images} />
        <Dna
          visible={isLoading}
          height="120"
          width="120"
          ariaLabel="dna-loading"
          wrapperStyle={{ margin: '0 auto' }}
          wrapperClass="dna-wrapper"
        />
        {images.length !== 0 ? <Button handleLoadMore={this.loadMore} /> : null}
      </StyledApp>
    );
  }
}
