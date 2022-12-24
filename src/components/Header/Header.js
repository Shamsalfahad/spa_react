import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
import "./Header.css"
const Header =() =>{
    return(
        <div>
            <div className="header ">
            <Navbar bg="dark" expand="lg" >
      
        <div className="container text-light">
        <Navbar.Brand href="#home" className="text-light">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-light">Home</Nav.Link>
            <Nav.Link href="#link" className="text-light">About</Nav.Link>
            <Nav.Link href="#link" className="text-light">Blog</Nav.Link>
            <Nav.Link href="#link" className="text-light">About</Nav.Link>
            <Nav.Link href="#link" className="text-light">Conact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        </div>
      
    </Navbar>
            </div>
        </div>
    );
};

export default Header;