import { Component } from 'react';
import {
  StyledButton,
  StyledFormInput,
  StyledSearchForm,
  StyledSearchbar,
} from './SearchBar.styled';
import PropTypes from 'prop-types'; // ES6

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  render() {
    return (
      <StyledSearchbar>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledButton type="submit"></StyledButton>
          <StyledFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
