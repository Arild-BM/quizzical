import React from "react"

import Main from "./Components/Main"
import AskQuestions from "./Components/AskQuestions"

// Libraries
import { useState } from 'react'

// Contexts
import MyQuestions from "./contexts/MyQuestions"
import NewPage from "./contexts/NewPage"

function App() {
    const [questions, setQuestions] = useState({})
    const [newP, setNewP] = useState(true)
    
    return (
        <div>
            <MyQuestions.Provider value={{questions, setQuestions}}>
                <NewPage.Provider value={{newP, setNewP}}>
                    {newP ? <Main /> : <AskQuestions />}
                </NewPage.Provider>
            </MyQuestions.Provider>
        </div>
    )
}

export default App