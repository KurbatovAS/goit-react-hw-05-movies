import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListItem = styled.li`
  margin: 20px;
  padding: 10px;
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  transition: 0.25s;
`;

export const Poster = styled.img`
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  transition: 0.25s;
`;

export const MovieLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;
`;

export const MovieTitle = styled.h2`
  margin-top: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  color: #2e94bb;
`;
