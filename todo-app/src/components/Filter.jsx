// import { useContext } from "react"
// import { TodoContext } from "../TodoContext"

import { useContext } from "react"
import { TodoContext } from "../TodoContext"

const Filter = () => {

  const {setFilter} = useContext(TodoContext)

  return (
    <div className="flex gap-2">
      <button onClick={() => setFilter("all")}>all</button>
      <button onClick={() => setFilter("active")}>active</button>
      <button onClick={() => setFilter("completed")}>completed</button>
    </div>
  )
}

export default Filter