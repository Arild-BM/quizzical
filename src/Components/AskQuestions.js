import React, {useContext} from "react"
import updateWord from "../updateWord";
import Answers from "./Answers";

// Contexts
import MyQuestions from "../contexts/MyQuestions"

function AskQuestions() {
    const {questions} = useContext(MyQuestions);
    
    
    function Question() { 
        
        // Skriver ut 5 spørsmål og 4 svaralternativer
        return (
            <div className = "inner--box">
                <h2>{updateWord(questions.results[0].question)}</h2>
                <Answers key={0} id={0} answers={questions.results[0]} />
                <h2>{updateWord(questions.results[1].question)}</h2>
                <Answers key={1} id={1} answers={questions.results[1]} />
                <h2>{updateWord(questions.results[2].question)}</h2>
                <Answers key={2} id={2} answers={questions.results[2]} />
                <h2>{updateWord(questions.results[3].question)}</h2>
                <Answers key={3} id={3} answers={questions.results[3]} />
                <h2>{updateWord(questions.results[4].question)}</h2>
                <Answers key={4} id={4} answers={questions.results[4]} />
            </div>
        )
    }
    
    return (
        <div className="main-content main-content2">
            <div className="image-wrapper1">
                <img className="blob1" src="./images/blob1.svg" alt="" />
            </div>
            <div className="image-wrapper2">
                <img className="blob2" src="./images/blob2.svg" alt="" />
            </div>
            <div className="text-main">
                    <Question />
            </div>
        </div>
    )
}

export default AskQuestions