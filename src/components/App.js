import { useState, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Layout';

const HomeView = lazy(() => import('../views/HomeView'));
const MoviesView = lazy(() => import('../views/MoviesView'));
const MovieDetailsView = lazy(() => import('../views/MovieDetailsView'));
const CastView = lazy(() => import('../views/CastView'));
const ReviewsView = lazy(() => import('../views/ReviewsView'));

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route
          path="movies"
          element={
            <MoviesView
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route path="movies/:movieId" element={<MovieDetailsView />}>
          <Route path="cast" element={<CastView />} />
          <Route path="reviews" element={<ReviewsView />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
