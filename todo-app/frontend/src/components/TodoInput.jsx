import { useContext, useRef } from "react";
import { TodoContext } from "../TodoContext";

const TodoInput = () => {

  const inputRef = useRef(null);
  const {dispatch} = useContext(TodoContext)

  const handleNewTodo = (e) => {
    e.preventDefault()
    dispatch({type:"create-todo", payload: inputRef.current.value})
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