import { useContext } from "react"
import Todo from "./Todo"
import { TodoContext } from "../TodoContext"

const TodoList = () => {

  const {todos} = useContext(TodoContext)

  return (
    <div>
      <div>
          {todos.map(todo => {
              return <Todo key={todo.title} todo={todo}/>
          })}
      </div>
      <div className="flex justify-between">
        <p>{todos.length} items left</p>
        <p>clear completed</p>
      </div>
    </div>
  )
}

export default TodoList