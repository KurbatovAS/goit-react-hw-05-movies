import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import { useFetchTrendingMovies } from 'hooks';
import { Title } from './HomeView.styled';

function HomeView() {
  const { trandMovies, loading } = useFetchTrendingMovies();

  return (
    <main>
      <Title>Tranding today</Title>
      {loading && <Loader />}
      <MoviesList movies={trandMovies} />
    </main>
  );
}

export default HomeView;
