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
        <span className="border border-slate-400 h-8 w-8 rounded-full" onClick={handleChecked}></span>
        <p className={todo.checked?"line-through":""}>{todo.title}</p>
        <span onClick={handleRemoveTodo}>x</span>
    </div>
  )
}

export default Todo