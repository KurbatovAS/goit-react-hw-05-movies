import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const InfoHeading = styled.h3`
  text-align: center;
  font-size: 18px;
  color: #203ec4;
  font-weight: 700;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 12px;
  text-decoration: none;
  color: #000;
  font-size: 16px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #203ec4;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;
