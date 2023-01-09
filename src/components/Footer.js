import "./Footer.css"
import React from 'react'

import {  FaHome, FaLinkedin, FaMailBulk, FaPhone,FaInstagram, FaGithubSquare } from "react-icons/fa"
const Footer = () => {
    return (
        <div clasName="footer">
            <div clasName="footer-container"></div>
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                    <div>
                        <p>103 Piplasheri,Una</p>
                        <p>Gujrat,362560</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        8140888275</h4>

                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        nareshngohil99@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>My name is Naresh Gohil I belong to Somnath(Gujrat).
                    I completed my B.tech form Gujrat Technological University Ahemdabad in May 2022.
                    After that I Trained for backend development using Node.js, express, and MongoDB and very much
                    interested in React and SQL</p>
                <div className="social">
                    <a href="https://www.linkedin.com/in/naresh-gohil-985998188">
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </a>
                    <a href="https://github.com/Nareshn99">
                        <FaGithubSquare size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </a>
                    <a href="https://www.instagram.com/mr.nareshgohil/">
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer