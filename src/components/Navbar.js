import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider"
import {NavMenu, MenuItem} from '../styles/Global'

const Navbar = () => (
  <UserConsumer>
    {value => (
    <NavMenu>
      <NavLink to="/">
        <MenuItem>
          Home
        </MenuItem>
      </NavLink>
      <NavLink to="/account/user">
        <MenuItem>
          {value.user}
        </MenuItem>
      </NavLink>
    </NavMenu> 
    )}
  </UserConsumer>
)

export default Navbar;