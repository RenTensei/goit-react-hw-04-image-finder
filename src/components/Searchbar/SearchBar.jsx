import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    return (
      <header className="searchbar">
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(this.state.searchQuery);
          }}
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
