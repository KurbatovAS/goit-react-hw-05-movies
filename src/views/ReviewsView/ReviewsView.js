import Loader from 'components/Loader';
import { useFetchReviews } from 'hooks';
import RenderReview from 'components/RenderReview';
import { IsEpsent } from './ReviewsView.styled';

function ReviewsView() {
  const { reviews, loading } = useFetchReviews();

  return (
    <>
      {loading && <Loader />}
      {reviews.length ? (
        <ul>
          {reviews.map(item => (
            <RenderReview key={item.id} data={item} />
          ))}
        </ul>
      ) : (
        <IsEpsent>Reviews not found</IsEpsent>
      )}
    </>
  );
}

export default ReviewsView;
