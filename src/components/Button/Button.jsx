import { StyledLoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export function Button({ handleLoadMore }) {
  return <StyledLoadMore onClick={handleLoadMore}>Load More</StyledLoadMore>;
}

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
