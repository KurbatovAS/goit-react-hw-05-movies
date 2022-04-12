import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetchSearchMovies } from 'hooks';
import Searchbar from 'components/Searchbar';
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';

function MoviesView({ searchQuery, setSearchQuery }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQueryPage, setSearchQueryPage] = useState(1);
  const { moviesBySearch, loading } = useFetchSearchMovies(searchQuery);
  const currentSearchQuery = searchParams.get('query');

  useEffect(() => {
    if (currentSearchQuery) {
      setSearchQuery(currentSearchQuery);
    } else {
      setSearchParams({ query: searchQuery });
    }
  }, [currentSearchQuery, searchQuery, setSearchParams, setSearchQuery]);

  function searchHandler(sQuery) {
    setSearchQuery(sQuery);
    setSearchParams({ query: sQuery });

    if (searchQueryPage !== 1) {
      setSearchQueryPage(1);
    }
  }

  return (
    <main>
      <Searchbar searchHandler={searchHandler} />
      {loading && <Loader />}
      {moviesBySearch && <MoviesList movies={moviesBySearch} />}
    </main>
  );
}

MoviesView.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default MoviesView;
