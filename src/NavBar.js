import { NavLink} from "react-router-dom"
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){
    return(
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Naresh Gohil</Navbar.Brand>
          <Nav className="me-auto">
          <ul className="navBar">
                <li> <NavLink className="navBarLink" to="/">Home</NavLink></li>
                <li><NavLink className="navBarLink" to="/about">About</NavLink></li>
                <li><NavLink className="navBarLink" to="/contact">Contact</NavLink></li>
                <li><NavLink className="navBarLink" to="/user">User</NavLink></li>
                <li><NavLink className="navBarLink" to="/registor">Regostor</NavLink></li>
                <li><NavLink className="navBarLink" to="/login">Login</NavLink></li>
                
            </ul>
          </Nav>
        </Container>
      </Navbar>
            
       
        
        </div>
    )
}

export default NavBar