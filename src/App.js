import './App.css';
// import Form from './Form'
// import Login from './Login'
// import Member from './Users'
// import { Button } from 'bootstrap';
// import TypesExample from './button'
// import Alert from 'react-bootstrap/Alert';
// import Table from 'react-bootstrap/Table';
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from './Component/Home'
import About from './Component/About'
import NavBar from './NavBar'
import Contact from './Component/Contact';
import User from './Component/User'
import Filtter from './Component/Filtter';
import Naresh from './Component/Naresh'
import Priyanka from './Component/Priyanka';
import Registration from './Component/Registration';
import Login from './Component/Login';
import Protection from './Component/Protection'
function App() {
  return (
    <div className="App">
      {
      
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact/" element={<Contact />}>
              <Route path="naresh" element={<Naresh />}></Route>
              <Route path="priyanka" element={<Priyanka />}></Route>
            </Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/registor" element={<Registration />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </BrowserRouter>
      }
    </div>

  )
}






export default App;
