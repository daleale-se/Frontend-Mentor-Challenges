import { useContext } from "react"
import { TodoContext } from "../TodoContext"

const Filter = () => {

  const {dispatch} = useContext(TodoContext)

  return (
    <div className="flex gap-2">
      <button onClick={() => dispatch({type:"show-all"})}>all</button>
      <button onClick={() => dispatch({type:"show-actives"})}>active</button>
      <button onClick={() => dispatch({type:"show-completed"})}>completed</button>
    </div>
  )
}

export default Filter