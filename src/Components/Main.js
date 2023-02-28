import React from "react"
import useFetch from "../useFetch"
import blob1 from "../images/blob1.svg"
import blob2 from "../images/blob2.svg"

function Main(props) {
    
    useFetch(props.setDataLoaded)
        
        return (
            <div className="main-content">
                <div className="image-wrapper1">
                    <img className="blob1" src= {blob1} alt="" />
                </div>
                <div className="image-wrapper2">
                    <img className="blob2" src= {blob2} alt="" />
                </div>
                <div className="text-main">
                    <h1>Quizzical</h1>
                    <p>Let's have fun and test your knowledge about Computer Science!</p>
                    <button onClick={props.handleClick}>Start quiz</button>
                </div>
            </div>
        )
    
}

export default Main