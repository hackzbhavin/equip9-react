import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Navbar, Nav } from 'react-bootstrap';

import "../../Assets/Css/bootstrap.min.css";


const activeTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#f4af0c" };
  } else {
    return { color: "#FFFFFF" };
  }
};



const NavigationMenu = ({ history }) => (
 

    <div>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top p-2 shadow'>
      
    <Navbar.Brand href="/" className='mx-5'>Equip 9</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto mr-5">

        <Nav.Link style={activeTab(history, "/")} href="/">Home</Nav.Link>
        <Nav.Link style={activeTab(history, "/Register")} href="/Register">Register</Nav.Link>
        <Nav.Link style={activeTab(history, "/Login")} href="/Login">Login</Nav.Link>
      
      
      </Nav>

    </Navbar.Collapse>
  </Navbar>
  </div>
  )

export default withRouter(NavigationMenu);
