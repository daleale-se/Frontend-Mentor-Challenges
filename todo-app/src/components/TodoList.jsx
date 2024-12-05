import { useContext } from "react"
import Todo from "./Todo"
import { TodoContext } from "../TodoContext"

const TodoList = () => {

  const {dispatch, filteredTodos} = useContext(TodoContext)

  const incompletedTodos = filteredTodos().filter(todo => !todo.checked)

  const handleClearCompleted = () => {
    dispatch({type: "clear-completed"})
  }

  return (
    <div>
      <div>
          {filteredTodos().map(todo => {
              return <Todo key={todo.title} todo={todo}/>
          })}
      </div>
      <div className="flex justify-between">
        <p>{incompletedTodos.length} items left</p>
        <button onClick={handleClearCompleted}>clear completed</button>
      </div>
    </div>
  )
}

export default TodoList