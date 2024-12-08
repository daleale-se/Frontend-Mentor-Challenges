import { useContext, useState } from "react"
import Todo from "./Todo"
import { TodoContext } from "../TodoContext"
import Filter from "./Filter"

const TodoList = () => {

  const {dispatch, todos} = useContext(TodoContext)
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const incompletedTodos = filteredTodos.filter(todo => !todo.checked)

  const handleClearCompleted = () => {
    dispatch({type: "clear-completed"})
  }

  return (
    <div>
      <div>
          {filteredTodos.map(todo => {
              return <Todo key={todo.title} todo={todo}/>
          })}
      </div>
      <div className="flex justify-between">
        <p>{incompletedTodos.length} items left</p>
        <button onClick={handleClearCompleted}>clear completed</button>
      </div>
      <Filter setFilteredTodos={setFilteredTodos}/>
    </div>
  )
}

export default TodoList