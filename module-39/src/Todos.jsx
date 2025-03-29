import { use } from "react"
import Todo from "./todo"

export default function Todos({todosPromise}){
    // console.log(todosPromise)
    const todos=use(todosPromise)
return(
    <>
    Todos 
    {todos.length}
    {
        todos.map(todo=><Todo todo={todo}></Todo>)
    }
    </>
)
}