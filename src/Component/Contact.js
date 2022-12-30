
import { Link, Outlet } from "react-router-dom"
import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


function Contact() {

    return (
        <div>
            <h1>Contact Page</h1>
            <Link to="naresh">Naresh</Link>
            <Link to="priyanka">Priyanka</Link>
            <Outlet />
        </div>
    )
}

export default Contact