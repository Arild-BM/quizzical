import {useContext, useEffect} from "react"

// Contexts
import MyQuestions from "./contexts/MyQuestions"
// import NewPage from "./contexts/NewPage"

async function Loadquestions() {
    const {setQuestions} = useContext(MyQuestions);
    // const {setNewP} = useContext(NewPage);
    
    useEffect(() => {
        async function getQuestions() {
            // setNewP(false)                        
            const res = await fetch("https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple")
            const data = await res.json()
            setQuestions(data)
        }
        getQuestions()
    // eslint-disable-next-line        
    },[])
}

function NewQuestions() {
    Loadquestions()  
}


export default NewQuestions