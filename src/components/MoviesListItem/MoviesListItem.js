import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMAGE_URL } from 'services/themovieAPI';
import {
  ListItem,
  Poster,
  MovieLink,
  MovieTitle,
} from './MoviesListItem.styled';

function MoviesListItem({ movie }) {
  const { id, title, poster_path, name } = movie;
  const location = useLocation();

  return (
    <ListItem>
      <MovieLink to={`/movies/${id}`} state={{ from: location }}>
        <Poster
          src={IMAGE_URL + poster_path}
          alt={title || name}
          width="300"
          height="450"
        />
        <MovieTitle>{title}</MovieTitle>
      </MovieLink>
    </ListItem>
  );
}

MoviesListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default MoviesListItem;
