import React, { useState, useEffect, useLayoutEffect } from 'react';

import { SearchBar } from 'components/Searchbar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { fetchImages } from 'services/request';
import { Button } from 'components/Button/Button';

import { StyledApp } from './App.styled';
import { Dna } from 'react-loader-spinner';

export function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!page) {
      setIsLoading(false);
      console.log('im done');
      return;
    }

    setIsLoading(true);

    fetchImages(query, page)
      .then(data => {
        if (page === 1) {
          setImages(data.hits);
          console.log('render new page');
          return;
        }

        setImages(prev => [...prev, ...data.hits]);
        console.log('render more');
      })
      .catch(e => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  useLayoutEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth', // Make the scroll behavior smooth
    });
  }, [images]);

  const updateQuery = newQuery => {
    setImages([]);
    setQuery(newQuery);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <StyledApp>
      <SearchBar onSubmit={updateQuery} />
      <ImageGallery images={images} />

      <Dna
        visible={isLoading}
        height="120"
        width="120"
        ariaLabel="dna-loading"
        wrapperStyle={{ margin: '0 auto' }}
        wrapperClass="dna-wrapper"
      />

      {images.length !== 0 && <Button handleLoadMore={loadMore} />}
    </StyledApp>
  );
}
