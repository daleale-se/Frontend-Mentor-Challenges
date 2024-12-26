/* eslint-disable react/prop-types */
import { useContext } from "react"
import { TodoContext } from "../TodoContext"
import { deleteTodo, getUserTodos, updateTodo } from "./httpRequest"

const Todo = ({todo}) => {

  const {dispatch} = useContext(TodoContext)

  const handleRemoveTodo = async () => {
    const username = "manguete"
    await deleteTodo(todo.id, username)
    const userTodos = await getUserTodos(username)
    dispatch({type: "reorder", payload: userTodos})
  }

  const handleChecked = async () => {
    const username = "manguete"
    await updateTodo(todo.id, todo.checked, username)
    const userTodos = await getUserTodos(username)
    dispatch({type: "reorder", payload: userTodos})
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