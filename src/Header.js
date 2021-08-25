import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    state = {
        token: localStorage.getItem('TOKEN'),
      };
    render() {
      return (
        <header className="links">
            <NavLink exact to="/">
                Home
            </NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to='/sign-in'>Sign In</NavLink>
            <div id='token'> 
                APP TOKEN: {this.state.token && this.state.token.toString()}
            </div>
        </header>
      );
    }
  }
  
  export default Header;
  