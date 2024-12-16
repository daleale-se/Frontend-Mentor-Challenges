import { useContext } from "react"
import { TodoContext } from "../TodoContext"

const Filter = () => {

  const {setFilter} = useContext(TodoContext)

  return (
    <div className="flex gap-2">
      <button onClick={() => setFilter("show-all")}>all</button>
      <button onClick={() => setFilter("show-actives")}>active</button>
      <button onClick={() => setFilter("show-completed")}>completed</button>
    </div>
  )
}

export default Filter