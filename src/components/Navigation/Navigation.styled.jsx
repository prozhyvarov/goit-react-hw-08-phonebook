import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavMain = styled.nav`
  background-color: #000;
  border-radius: 20px;
`;

export const NavUserAuth = styled.div`
  display: flex;
  gap:20px;
  align-items: center;
  
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-width: 90px;
  color: #000;
  text-decoration: none;
  font-size: 20px;
  border-radius: 8px;
  background-color: #fff;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #fba003;
    cursor: pointer;
  }
`;

export const NavLinkMain = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: auto;

  padding-left: 10px;
  color: white;
  text-decoration: none;
  font-size: 25px;
  font-weight: 700;

  &:hover,
  &:focus {
    color: #fba003;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  padding:10px;
  text-align:center;
`;