import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getReviews } from 'services/themovieAPI';

export function useFetchReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovie() {
      setLoading(true);
      try {
        const items = await getReviews(movieId);
        setReviews(items.results);
      } catch (error) {
        setError(error);
        console.log('ERROR by useFetchReviews', error.message);
        toast.error('404 - There is no such page');
      } finally {
        setLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return { reviews, loading, error };
}
