import React from "react"

import Main from "./Components/Main"
import AskQuestions from "./Components/AskQuestions"
import data from "./data/data"

// Libraries
import { useState } from 'react'

// Contexts
import MyQuestions from "./contexts/MyQuestions"
import NewPage from "./contexts/NewPage"
import MyAnswers from "./contexts/MyAnswers"

function App() {
    // questions er rådata hentet fra API-kall
    const [questions, setQuestions] = useState({})
    
    // Denne brukes for å bytte mellom velkomstside og spørsmålsside.
    const [newP, setNewP] = useState(true)
    
    // Her hentes data inn fra data.js. Disse "manipuleres" i Answers.js
    const [selectedAnswer, setSelectedAnswer] = useState(data)
    
    return (
        <div>
            <MyQuestions.Provider value={{questions, setQuestions}}>
                <NewPage.Provider value={{newP, setNewP}}>
                    <MyAnswers.Provider value={{selectedAnswer, setSelectedAnswer}}>
                        {newP ? <Main /> : <AskQuestions />}
                    </MyAnswers.Provider>
                </NewPage.Provider>
            </MyQuestions.Provider>
        </div>
    )
}

export default App