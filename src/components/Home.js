import React from "react";
import IdeaDisplay from "./IdeaDisplay";
import "./Home.css";

function Home(props) {
    
    return (
        <div>
        <div className="home-container">
            <div className="right-home-cont">
            <h1>WHERE YOUR IDEA MEETS THE WORLD!</h1>
            <p>Whether it's big, small, weird, wonderful, a work-in-progress, or a world-beating idea, we'll give you the opportunity to show your project to our incredible community of makers.</p>
            </div>
           <div className="left-home-cont">
            <div className="project-count">
                <div>
                    <p>Total Pending Ideas <span>12</span></p>
                </div>
                <div>
                    <p>Total Ongoing Ideas <span>4</span></p>
                </div>
                </div>
           </div>
            <div className="overlay"></div>
        </div>
        <IdeaDisplay ideasData={props.ideasData}/>
        </div>
    )
}

export default Home;