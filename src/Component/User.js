import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'


function User() {
    const [value, setValue] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/user").then((result) => {
            result.json().then((resp) => {
                setValue(resp)
            })
        })
    }, [])

    return (
        <div className="App">
            <h1>Table Of Users</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        value.map((item, i) =>
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{item.FullName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>)
                    }
                </tbody>
            </Table>

        </div >
    );
}


export default User
