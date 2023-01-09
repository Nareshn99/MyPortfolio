import "./WorkCard.css";
import React from 'react';
import { FaGitAlt } from "react-icons/fa";
const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="img" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p><br></br><br></br>
                <div className="pro-btns">
                    <h3>GitHub Link:  <a href={props.view}>
                        <FaGitAlt size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </a>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default WorkCard