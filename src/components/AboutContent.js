import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom"
import img7 from "../assets/img1.avif"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who am i?????????</h1>
                <p>I have 6 month experience of backend development using Node.js, express, and MongoDB and Right now i am very much interested in React and SQL</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack-top">
                        <img src={img7} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent