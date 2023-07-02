import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #3b3a39;
  font-weight: 500;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right:10px;
  box-shadow: -5px -5px 7px rgba(255, 255, 255, 0.5),
    5px 5px 7px rgba(70, 70, 70, 0.2);
  &.active {
    box-shadow: none;
    color:#033e96;
 
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 1px solid;
`;
