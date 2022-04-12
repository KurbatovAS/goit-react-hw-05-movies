import PropTypes from 'prop-types';
import { Item, Character, ActorName, Photo } from './RenderActor.styled';

function RenderActor({ actor }) {
  const { character, name, profile_path } = actor;
  return (
    <Item>
      <Character>{character}</Character>
      <ActorName>{name}</ActorName>
      <Photo
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png'
        }
        alt={name}
      />
    </Item>
  );
}

RenderActor.propTypes = {
  actor: PropTypes.shape({
    character: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }).isRequired,
};

export default RenderActor;
