import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieById } from 'services/themovieAPI';

export function useFetchMovieDetails() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovie() {
      setLoading(true);
      try {
        const movieData = await getMovieById(movieId);
        setMovieInfo(movieData);
      } catch (error) {
        setError(error);
        console.log('ERROR by useFetchMovieDetails', error.message);
        toast.error('404 - There is no such page');
      } finally {
        setLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return { movieInfo, loading, error };
}
