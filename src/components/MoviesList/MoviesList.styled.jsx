import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MoviesLists = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  margin: 0;
  margin-top: 30px;
  padding: 0;
`;

export const MoviesListsItem = styled.li`
  margin-bottom: 20px;
`;

export const MoviesListsItemLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #030303;
  text-decoration: underline;
`;

export const MovieListTitle = styled.h2`
  margin: 0;
`;
