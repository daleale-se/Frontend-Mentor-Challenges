import { useContext } from "react"
import { TodoContext } from "../TodoContext"

// eslint-disable-next-line react/prop-types
const Filter = ({setFilteredTodos}) => {

  const {showAll, showCompleted, showActives} = useContext(TodoContext)

  return (
    <div className="flex gap-2">
      <button onClick={() => setFilteredTodos(showAll())}>all</button>
      <button onClick={() => setFilteredTodos(showActives())}>active</button>
      <button onClick={() => setFilteredTodos(showCompleted())}>completed</button>
    </div>
  )
}

export default Filter