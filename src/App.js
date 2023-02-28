import React from "react"

import Main from "./Components/Main"
import AskQuestions from "./Components/AskQuestions"

// Libraries
import { useState } from 'react'

// Contexts
import MyQuestions from "./contexts/MyQuestions"

function App() {
    // questions er data hentet fra API-kall
    const [questions, setQuestions] = useState({})
    
    // Denne brukes for å bytte mellom velkomstside og spørsmålsside.
    const [newP, setNewP] = useState(true)

    // Denne sjekker om data er lastet inn.
    const [dataLoaded, setDataLoaded] = useState(false)
     
    return (
        <div>
            <MyQuestions.Provider value={{questions, setQuestions}}>
                {newP ? <Main 
                    handleClick={() => setNewP(!newP)} 
                    newP = {newP}
                    setDataLoaded = {() => setDataLoaded(!dataLoaded)}
                    dataLoaded = {dataLoaded}
                /> 
                    : <AskQuestions dataLoaded = {dataLoaded} setDataLoaded = {setDataLoaded} setNewP = {setNewP} />}
            </MyQuestions.Provider>
        </div>
    )
}

export default App