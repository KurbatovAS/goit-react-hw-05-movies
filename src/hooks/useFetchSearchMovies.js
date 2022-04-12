import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getMoviesBySearchQuery } from 'services/themovieAPI';

export function useFetchSearchMovies(searchQuery) {
  const [moviesBySearch, setMoviesBySearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function getMovies() {
      setLoading(true);
      try {
        const movies = await getMoviesBySearchQuery(searchQuery);
        setMoviesBySearch(movies.results);
      } catch (error) {
        setError(error);
        console.log('ERROR by useFetchSearchMovies', error.message);
        toast.error(`There is no such ${searchQuery} movies`);
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, [searchQuery]);

  return { moviesBySearch, loading, error };
}
