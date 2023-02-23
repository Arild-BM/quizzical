import React, {useContext} from "react"
import NewQuestions from "../NewQuestions"
import NewPage from "../contexts/NewPage"

function Main() {
    const {setNewP} = useContext(NewPage);
    
    NewQuestions()
        
        return (
            <div className="main-content">
                <div className="image-wrapper1">
                    <img className="blob1" src="./images/blob1.svg" alt="" />
                </div>
                <div className="image-wrapper2">
                    <img className="blob2" src="./images/blob2.svg" alt="" />
                </div>
                <div className="text-main">
                    <h1>Quizzical</h1>
                    <p>Some description if needed</p>
                    {console.log("A")}
                    <button onClick={() => setNewP(false)}>Start quiz</button>
                </div>
            </div>
        )
    
}

export default Main