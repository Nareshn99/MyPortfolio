import "./HeroImage.css";
import React from "react";
import { Link } from 'react-router-dom';
import introImg from "../assets/into4.jpg";

const HeroImage = () => {
    return <div className="hero">
        <div className="mask">
            <img className="into-img" src={introImg} alt="introImg"></img>
            <div className="contect">
                <p>HI, I'M Backend DEVELOPER.</p>
                <h1>Nodejs Developer</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    </div>;
};

export default HeroImage;