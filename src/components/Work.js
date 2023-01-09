import "./WorkCard.css"
import React from 'react'
import WorkCard from "./WorkCard"
import WorkcardData from "./WorkCardData"

const work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projectes</h1>
            <div className="project-container">
                {WorkcardData.map((val, ind) => {
                    return (
                        <WorkCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            view={val.view}>
                        </WorkCard>
                    )
                })}
            </div>
        </div>
    )
}

export default work