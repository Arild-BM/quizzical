import React, {useContext, useState} from "react"
import updateWord from "../updateWord";
import blob1 from "../images/blob1.svg"
import blob2 from "../images/blob2.svg"
import {nanoid} from "nanoid"

// Contexts
import MyQuestions from "../contexts/MyQuestions"

function Question({showAnswers, dataLoaded, selected, setSelected}) { 
    const {questions} = useContext(MyQuestions);
    
    function clickSelected(qid, aid) {
        if (!showAnswers) {
            if (selected[qid]===aid) {
                aid=4
            }
            const tempArray = [...selected]
            tempArray.splice(qid, 1, aid)
            setSelected([...tempArray])
        }
    }

    function setColor(qid, aid) {
        switch(true){
            case questions[qid].correct === aid:
                return "correct";
            case selected[qid] === aid:
                return "wrong opacity";
            default:
               return "opacity";
         }
             }
    
    // Skriver ut 5 spørsmål og 4 svaralternativer
    if (dataLoaded) {
        
        return (
            <div className = "inner--box">
                {questions.map((item, qindex) => (
                    <div key = {nanoid()}>
                        <h2 key={nanoid()}>{updateWord(item.question)}</h2>
                        <div key = {nanoid()} className = "answers">
                            {item.answers.map((item, index) => (<h3 
                                onClick = {() => clickSelected(qindex, index)} 
                                className = {showAnswers ? setColor(qindex, index) : selected[qindex]===index ? "selected" : ""} 
                                key = {nanoid()}> {updateWord(item)} </h3>))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

function AskQuestions({dataLoaded, setDataLoaded, setNewP}) {
    const [showAnswers, setShowAnswers] = useState(false)
    const [selected, setSelected] = useState([4, 4, 4, 4, 4])
    const {questions} = useContext(MyQuestions);
    const score = selected.reduce((total, current, index) => current === questions[index].correct ? total+1 : total, 0)
    
    function checkAnswers() {
        if (!selected.includes(4)) {
            setShowAnswers(true);
        }
    }

    function playAgain() {
        setShowAnswers(false);
        setSelected([4, 4, 4, 4, 4])
        setNewP(true)
        setDataLoaded(false)
    }

    return (
        <div className="main-content main-content2">
            <div className="image-wrapper1">
                <img className="blob1" src= {blob1} alt="" />
            </div>
            <div className="image-wrapper2">
                <img className="blob2" src= {blob2} alt="" />
            </div>
            <div className="text-main">
                    <Question 
                        showAnswers = {showAnswers} 
                        dataLoaded = {dataLoaded}
                        selected = {selected}
                        setSelected = {setSelected}
                    />
                    {!showAnswers ? 
                    (<button className = "check-answers-btn" onClick={checkAnswers}>Check answers</button>)
                    : (
                    <div className="play-again">
                        <p className="play-again-text">You have {score}/5 correct answers.</p>
                        <button className = "play-again-btn" onClick={playAgain}>Play again</button>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default AskQuestions