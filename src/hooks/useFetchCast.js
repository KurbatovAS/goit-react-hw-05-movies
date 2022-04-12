import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieCast } from 'services/themovieAPI';

export function useFetchCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovie() {
      setLoading(true);
      try {
        const actors = await getMovieCast(movieId);
        setCast(actors.cast);
      } catch (error) {
        setError(error);
        console.log('ERROR by useFetchCast', error.message);
        toast.error('404 - There is no such page');
      } finally {
        setLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return { cast, loading, error };
}
