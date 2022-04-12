import Loader from 'components/Loader';
import { useFetchCast } from 'hooks';
import RenderActor from 'components/RenderActor';
import { List } from './CastView.styled';

function CastView() {
  const { cast, loading } = useFetchCast();

  return (
    <>
      {loading && <Loader />}
      {cast && (
        <List>
          {cast.map(actor => (
            <RenderActor key={actor.id} actor={actor} />
          ))}
        </List>
      )}
    </>
  );
}

export default CastView;
