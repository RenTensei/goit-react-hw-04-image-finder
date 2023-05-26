import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledButton,
  StyledFormInput,
  StyledSearchForm,
  StyledSearchbar,
} from './SearchBar.styled';

export function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
  };

  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledButton type="submit"></StyledButton>
        <StyledFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </StyledSearchForm>
    </StyledSearchbar>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
