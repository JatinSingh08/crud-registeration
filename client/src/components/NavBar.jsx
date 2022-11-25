import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = styled(AppBar)`
  background: black;
  position: static
`

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
  color: inherit;
`
const Logo = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
`
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header>
        <Toolbar>
          <Logo to='/'>User Management System</Logo>
          <Tabs to='/all'>All Users</Tabs>
          <Tabs to='/add' >Add User</Tabs>
        </Toolbar>
      </Header>
    </div>
  )
}
export default NavBar