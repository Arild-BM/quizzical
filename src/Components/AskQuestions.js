import React, {useState, useContext, useEffect} from "react"
import MyQuestions from "../contexts/MyQuestions"
import data from "../data/data"

let i = 0

function AskQuestions() {
    const {questions} = useContext(MyQuestions);
    const [selectedAnswer, setSelectedAnswer] = useState(data)
    
    function updateWord(word) {
        return word.replace(/&lt;/g, `<`).replace(/&gt;/g, `>`).replace(/&quot;/g, `"`).replace(/&#039;/g, `'`)
    }

    function Answers({id, answers}) {
        const newAnswers = [...selectedAnswer]
        
        newAnswers[id].answers[0].answer = answers.correct_answer
        newAnswers[id].answers[1].answer = answers.incorrect_answers[0]
        newAnswers[id].answers[2].answer = answers.incorrect_answers[1]
        newAnswers[id].answers[3].answer = answers.incorrect_answers[2]
                
        useEffect(() => {setSelectedAnswer(newAnswers)
            // console.log(id)
        // eslint-disable-next-line        
        },[])
        
        return (
            <div className="answers">
                <h3>{updateWord(selectedAnswer[id].answers[0].answer)}</h3>
                <h3>{updateWord(selectedAnswer[id].answers[1].answer)}</h3>
                <h3>{updateWord(selectedAnswer[id].answers[2].answer)}</h3>
                <h3>{updateWord(selectedAnswer[id].answers[3].answer)}</h3>
            </div>
        )
    }
        
    function Question() { 
        console.log(i)
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
            {console.log("------")}
                <Question />
            </div>
        </div>
    )
}

export default AskQuestions