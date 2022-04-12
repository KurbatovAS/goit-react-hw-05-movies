import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getTrendingMovies } from 'services/themovieAPI';

export function useFetchTrendingMovies() {
  const [trandMovies, setTrandMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const movies = await getTrendingMovies();
        setTrandMovies(movies.results);
      } catch (error) {
        setError(error);
        console.log('ERROR by useFetchTrendingMovies', error.message);
        toast.error('Something go wrong by getting trending movies');
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, []);

  return { trandMovies, loading, error };
}
