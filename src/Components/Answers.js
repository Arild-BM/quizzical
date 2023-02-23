import React, {useEffect, useContext} from "react"
import MyAnswers from "../contexts/MyAnswers"
import updateWord from "../updateWord";

function Answers({id, answers}) {
    // Henter inn data fra datafil (innhenting i App.js)
    const {selectedAnswer, setSelectedAnswer} = useContext(MyAnswers);
    
    // Kopierer disse til temp array
    let newAnswers = JSON.parse(JSON.stringify(selectedAnswer))
    console.log(id)
    
    //Oppdaterer svar i temp array med svar fra API-kall (answers)
    newAnswers[id].answers[0].answer = answers.correct_answer
    newAnswers[id].answers[1].answer = answers.incorrect_answers[0]
    newAnswers[id].answers[2].answer = answers.incorrect_answers[1]
    newAnswers[id].answers[3].answer = answers.incorrect_answers[2]
    
    //Her skal state array i state oppdateres med oppdatert array.
    useEffect(() => {setSelectedAnswer(newAnswers)
    
    //eslint-disable-next-line        
    },[])
    
    // Det er noe merkelig her. Kun svarene på siste spørsmål legges ut.
    // Det kan se ut som svarene overskrives med data fra datafil, men de
    // dataene skal kun hentes inn en gang. Disse skal overskrives med svarene
    // fra API-kall og for hvert spørsmål legges de inn i "selectedAnswers".
    // Kan derfor ikke se at noe overskriver data som ligger inne.
    // Linje 23 i App.js skal jo kun kjøres en gang. Og etterpå skal state
    // oppdateres i linje 20 ovenfor.


    // Og 4 svar fra state legges ut i DOM.
    // updateWord korrigerer spesialtegn (<, >, ' og ") før svaret skrives ut.
    // id vil angi nummer på spørsmål og skal gå fra 0 til 4, dvs 5 spørsmål.
    return (
        
        <div className="answers">
            <h3>{updateWord(selectedAnswer[id].answers[0].answer)}</h3>
            <h3>{updateWord(selectedAnswer[id].answers[1].answer)}</h3>
            <h3>{updateWord(selectedAnswer[id].answers[2].answer)}</h3>
            <h3>{updateWord(selectedAnswer[id].answers[3].answer)}</h3>
        </div>
    )
}

export default Answers