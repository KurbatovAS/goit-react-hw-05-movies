import PropTypes from 'prop-types';
import { AuthorName, Text } from './RenderReview.styled';

function RenderReview({ data }) {
  const { author, content } = data;
  return (
    <li>
      <AuthorName>Author: {author}</AuthorName>
      <Text>{content}</Text>
      <hr />
    </li>
  );
}

RenderReview.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default RenderReview;
