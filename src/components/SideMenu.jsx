import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: block;
  background-color: #f8f9fa;
  color: black;
  padding: 10px 20px;
  min-width: 200px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  transition: 0.2s;
  
  &:hover {
    background-color: rgba(0,123,255,0.2);
  }
  
  &.active {
   background-color: dodgerblue;
   color: white;
  }
`;

const SideMenu = () => {
  return (
    <nav>
      <StyledNavLink exact to="/">Form</StyledNavLink>
      <StyledNavLink exact to="/chart">Chart</StyledNavLink>
    </nav>
  );
};

export default SideMenu;
