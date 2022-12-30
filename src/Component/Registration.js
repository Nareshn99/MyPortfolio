import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import PostUser from './PostUser';

function Registration() {

  const [FullName, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  function saveUser() {
    console.log({ FullName, email, password,phone})
    let data={ FullName, email, password,phone}
    fetch("http://localhost:5000/register", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      console.log(result)
    })

  }
  return (
    <div className='App'>
      <br></br><br></br>
      <input type="text" value={FullName} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" /><br></br><br></br>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" /><br></br><br></br>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" /><br></br><br></br>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br></br><br></br>
      <Button variant="primary" type="submit" onClick={saveUser}>
        Register
      </Button><br></br><br></br>
    </div>
  );
}

export default Registration;
