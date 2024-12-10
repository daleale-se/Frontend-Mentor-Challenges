import { useContext } from "react"
import Todo from "./Todo"
import { TodoContext } from "../TodoContext"
import Filter from "./Filter"
import { List, arrayMove } from "react-movable";

const TodoList = () => {

  const {dispatch, filteredTodos} = useContext(TodoContext)

  const incompletedTodos = filteredTodos().filter(todo => !todo.checked)

  const handleClearCompleted = () => {
    dispatch({type: "clear-completed"})
  }

  const handleReorder = ({ oldIndex, newIndex }) => {
    const updatedTodos = arrayMove(filteredTodos(), oldIndex, newIndex);
    dispatch({ type: "reorder", payload: updatedTodos });
};

  return (
    <div>
      <div className="flex flex-col gap-4 items-center">
          <List
            values={filteredTodos()} // Pass filtered todos to the list
            onChange={handleReorder} // Handle reordering
            renderList={({ children, props }) => (
                <div {...props} className="w-full">
                    {children}
                </div>
            )}
            renderItem={({ value, props }) => (
                <div {...props} key={value.title} className="p-2 border rounded mb-2">
                    <Todo todo={value}/>
                </div>
            )}
        />

          {/* {filteredTodos().map(todo => {
              return <Todo key={todo.title} todo={todo}/>
          })} */}
      </div>
      <div className="flex justify-between">
        <p>{incompletedTodos.length} items left</p>
        <button onClick={handleClearCompleted}>clear completed</button>
      </div>
      <Filter/>
    </div>
  )
}

export default TodoList