import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import { json } from 'react-router';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function loginUserData() {
        console.log({ email, password })
        let data = { email, password }
        fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result)
            result.json().then((resp)=>{
                localStorage.setItem("auth",JSON.stringify(resp.data.token))
                console.log(resp.data.token)
            })
        })

    }
    return (
        <div className='App'>
            <br></br><br></br>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" /><br></br><br></br>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br></br><br></br>
            <Button variant="primary" type="submit" onClick={loginUserData}>
                Login
            </Button><br></br><br></br>
        </div>
    );
}

export default Login;
