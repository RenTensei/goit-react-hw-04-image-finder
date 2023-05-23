import React, { Component } from 'react';

import { SearchBar } from 'components/Searchbar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'services/request';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    images: [],
    currentQuery: '',
    currentPage: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { currentQuery } = this.state;

    if (prevState.currentQuery !== currentQuery) {
      const newPage = 1;

      const data = await fetchImages(currentQuery, newPage);

      this.setState({ images: data.hits, currentPage: newPage });
    }
  }

  updateQuery = newQuery => {
    this.setState({ currentQuery: newQuery });
  };

  loadMore = async () => {
    const { currentQuery, currentPage } = this.state;

    const nextPage = currentPage + 1;

    const data = await fetchImages(currentQuery, nextPage);

    this.setState(prevState => ({
      images: [...prevState.images, ...data.hits],
      currentPage: nextPage,
    }));
  };

  render() {
    const { images } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.updateQuery} />
        <ImageGallery images={images} />
        {images.length !== 0 ? <Button handleLoadMore={this.loadMore} /> : null}
      </div>
    );
  }
}
