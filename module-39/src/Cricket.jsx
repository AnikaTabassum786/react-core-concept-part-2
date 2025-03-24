import { use, useState } from "react"

export default function Cricket(){
    const [ball,setBall]=useState(0)
    const [score,setScore]=useState(0)

    const handleAddOne=()=>{
       const updateScore=score+1;
       setScore(updateScore)
       
       const totalBall= ball+1;
       setBall(totalBall)

    }

    const handleAddFour=()=>{
        const updateScore=score+4
        setScore(updateScore)

        const totalBall= ball+1;
       setBall(totalBall)
     }

     const handleAddSix=()=>{
        const updateScore=score+6
        setScore(updateScore)

        const totalBall= ball+1;
       setBall(totalBall)
     }

return(
    <div>
        {
            ball===6?'1':'0'
        }
        <h1>Score: {score} Ball: {ball}</h1>
        <button onClick={handleAddOne}  >Single</button>
        <button  onClick={handleAddFour}>Four</button>
        <button onClick={handleAddSix}>Six</button>
    </div>
)
}