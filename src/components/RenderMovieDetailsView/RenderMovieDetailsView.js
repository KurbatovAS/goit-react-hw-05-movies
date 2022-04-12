import PropTypes from 'prop-types';
import {
  Container,
  Poster,
  MovieTitle,
  Info,
  InfoSpan,
} from './RenderMovieDetailsView.styled';

function RenderMovieDetailsView({ movieInfo }) {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieInfo;
  return (
    <Container>
      {poster_path ? (
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      ) : (
        <Poster
          src={`https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png`}
          alt={`There is no poster`}
        />
      )}
      <div>
        <MovieTitle>
          {title} ({release_date.slice(0, 4)})
        </MovieTitle>
        <Info>
          <InfoSpan>User Score:</InfoSpan> {vote_average}
        </Info>
        <Info>
          <InfoSpan>Overview:</InfoSpan> {overview}
        </Info>
        <Info>
          <InfoSpan>Genres: </InfoSpan>
          {genres.map(genre => genre.name).join(', ')}
        </Info>
      </div>
    </Container>
  );
}

RenderMovieDetailsView.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
      .isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};

export default RenderMovieDetailsView;
