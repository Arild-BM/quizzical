import {useContext, useEffect} from "react"

// Contexts
import MyQuestions from "./contexts/MyQuestions"

async function NewQuestions() {
    const {setQuestions} = useContext(MyQuestions);
    
    // Henter API data og lagrer de i state.
    // Metodikk funnet på en nettside...
    useEffect(() => {
        async function getQuestions() {
            const res = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
            const data = await res.json()
            setQuestions(data)
        }
        getQuestions()
    // eslint-disable-next-line        
    },[])
}

export default NewQuestions