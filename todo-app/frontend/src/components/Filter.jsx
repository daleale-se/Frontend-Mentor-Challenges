import { useContext } from "react"
import { TodoContext } from "../TodoContext"

const Filter = () => {

  const {dispatch, state} = useContext(TodoContext)

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => dispatch({type:"set-filter", payload:"show-all"})} 
        className={state.filter === "show-all" ? "font-bold" : ""}
      >all</button>
      <button 
        onClick={() => dispatch({type:"set-filter", payload:"show-actives"})} 
        className={state.filter === "show-actives" ? "font-bold" : ""}
      >active</button>
      <button 
        onClick={() => dispatch({type:"set-filter", payload:"show-completed"})}
        className={state.filter === "show-completed" ? "font-bold" : ""}
      >completed</button>
    </div>
  )
}

export default Filter