/* eslint-disable react/prop-types */

import { useContext } from "react"
import { TodoContext } from "../TodoContext"

const Todo = ({todo}) => {

  const {dispatch} = useContext(TodoContext)

  const handleRemoveTodo = () => {
    dispatch({type: "remove", payload: todo.id})
    dispatch({type: "show-all"})
  }

  const handleChecked = () => {
    dispatch({type: "check", payload: todo.id})
    dispatch({type: "show-all"})
  }

  return (
    <div className="flex gap-5 p-2 border border-blue-600 rounded-lg items-center">
        <button className="border border-slate-400 h-8 w-8 rounded-full" onClick={handleChecked}></button>
        <p className={`${todo.checked?"line-through":""} hover:cursor-grab`}>{todo.title}</p>
        <button onClick={handleRemoveTodo}>x</button>
    </div>
  )
}

export default Todo