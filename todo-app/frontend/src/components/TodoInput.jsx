import { useContext, useRef } from "react";
import { TodoContext } from "../TodoContext";
import { sendTitle, getUserTodos } from "./httpRequest"

const TodoInput = () => {

  const inputRef = useRef(null);
  const {dispatch} = useContext(TodoContext)

  const handleNewTodo = async (e) => {
    e.preventDefault()
    const username = "manguete"
    await sendTitle(inputRef.current.value, username)
    const userTodos = await getUserTodos(username)
    dispatch({type: "reorder", payload: userTodos})
    inputRef.current.value = "";
  }

  return (
    <form className="flex">
        <button className="border border-slate-400 h-8 w-8 rounded-full" onClick={handleNewTodo}></button>
        <input type="text" placeholder="Create a new todo" ref={inputRef}/>
    </form>
  )
}

export default TodoInput