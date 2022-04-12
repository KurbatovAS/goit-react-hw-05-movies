import PropTypes from 'prop-types';
import MoviesListItem from 'components/MoviesListItem';
import { List } from './MoviesList.styled';

function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(movie => {
        return <MoviesListItem key={movie.id} movie={movie} />;
      })}
    </List>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};
export default MoviesList;
