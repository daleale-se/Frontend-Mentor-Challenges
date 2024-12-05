/* eslint-disable react/prop-types */

import { useContext } from "react"
import { TodoContext } from "../TodoContext"

const Todo = ({todo}) => {

  const {dispatch} = useContext(TodoContext)

  const handleRemoveTodo = () => {
    dispatch({type: "remove", payload: todo.id})
  }

  const handleChecked = () => {
    dispatch({type: "check", payload: todo.id})
  }

  return (
    <div className="flex gap-5">
        <button className="border border-slate-400 h-8 w-8 rounded-full" onClick={handleChecked}></button>
        <p className={todo.checked?"line-through":""}>{todo.title}</p>
        <button onClick={handleRemoveTodo}>x</button>
    </div>
  )
}

export default Todo