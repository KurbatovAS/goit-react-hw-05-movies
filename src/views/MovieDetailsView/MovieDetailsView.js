import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { GiReturnArrow } from 'react-icons/gi';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';
import AddInfo from 'components/AddInfo';
import RenderMovieDetailsView from 'components/RenderMovieDetailsView';
import { useFetchMovieDetails } from 'hooks';
import { GoBackBtn } from './MovieDetailsView.styled';

function MovieDetailsView() {
  const { movieInfo, loading } = useFetchMovieDetails();
  const navigate = useNavigate();
  const location = useLocation();

  function goBack() {
    navigate(location?.state?.from ?? '/');
  }

  return (
    <main>
      <GoBackBtn type="button" onClick={goBack}>
        <GiReturnArrow /> Go back
      </GoBackBtn>

      {loading && <Loader />}
      {movieInfo && <RenderMovieDetailsView movieInfo={movieInfo} />}
      <AddInfo />
      <Outlet />
    </main>
  );
}

export default MovieDetailsView;
