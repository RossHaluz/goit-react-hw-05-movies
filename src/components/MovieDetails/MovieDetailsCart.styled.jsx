import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackButton = styled(NavLink)`
  color: #030303;
  text-decoration: none;
  font-size: 16px;
  background-color: none;
  border-bottom: 1px solid #030303;
`;

export const MovieCartCover = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 30px;
`;

export const MovieTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const MovieCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const MovieCartInfoOverview = styled.h3`
  margin: 0;
  margin-top: 10px;
  font-size: 16px;
`;

export const MovieCartInfoDesc = styled.p`
  margin: 0;
  font-weight: 400;
  margin-top: 10px;
  font-size: 13px;
`;
