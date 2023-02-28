import {useContext, useEffect} from "react"

// Contexts
import MyQuestions from "./contexts/MyQuestions"

async function useFetch(setDataLoaded) {
    const {setQuestions} = useContext(MyQuestions);
    
    // Henter API data og lagrer de i state.
    useEffect(() => {
        async function getQuestions() {
            const res = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple")
            const data = await res.json()
            setQuestions(data.results.map(item => {
                const correct = Math.floor( Math.random() * 4 )
                item.incorrect_answers.splice(correct, 0, item.correct_answer)
                
                return {
                    question : item.question,
                    answers : [...item.incorrect_answers],
                    correct
                }
            }))
            setDataLoaded(true)
        }
        getQuestions()
    // eslint-disable-next-line        
    },[])
}

export default useFetch