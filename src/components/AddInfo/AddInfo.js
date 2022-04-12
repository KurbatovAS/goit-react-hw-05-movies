import { useLocation } from 'react-router-dom';
import { InfoHeading, Link, List } from './AddInfo.styled';

function AddInfo() {
  const location = useLocation();
  return (
    <>
      <InfoHeading>Additional information</InfoHeading>
      <List>
        <li>
          <Link to={'cast'} state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={'reviews'} state={location.state}>
            Reviews
          </Link>
        </li>
      </List>
    </>
  );
}

export default AddInfo;
