import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 5px;
  width: calc(1090px / 4);
`;

export const Character = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600px;
  color: #000;
`;

export const ActorName = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;

export const Photo = styled.img`
  width: 200px;
  height: 300px;
`;
