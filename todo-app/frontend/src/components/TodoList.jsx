import { useContext, useEffect, useState } from "react"
import Todo from "./Todo"
import { TodoContext } from "../TodoContext"
import Filter from "./Filter"
import { List, arrayMove } from "react-movable";

const getUserTodos = async (username) => {
  const response = await fetch(`http://localhost:5000/todos/${username}`);
  const data = await response.json();
  return data;
};

const TodoList = () => {

  const {dispatch, state} = useContext(TodoContext)
  // const [filter, setFilter] = useState("all")
  
  // const todos = filteredTodos()
  const todos = state.filteredTodos
  const incompletedTodos = todos.filter(todo => !todo.checked)

  useEffect(() => {
    async function fetchData() {
        const username = "manguete"
        const userTodos = await getUserTodos(username)
        dispatch({type: "fetch-todos", payload: userTodos})
        dispatch({type: "show-all"})
    }
    fetchData()
  }, [dispatch])

  const handleClearCompleted = () => {
    dispatch({type: "clear-completed"})
    dispatch({type: "show-all"})
  }

  const handleReorder = ({ oldIndex, newIndex }) => {
    const updatedTodos = arrayMove(todos, oldIndex, newIndex);
    dispatch({ type: "reorder", payload: updatedTodos });
    dispatch({type: "show-all"})
  };

  return (
    <div>
      <div className="flex flex-col gap-4 items-center">
          <List
            values={todos}
            onChange={handleReorder}
            renderList={({ children, props }) => (
                <div {...props} className="p-2 border rounded mb-2 flex flex-col gap-2">
                    {children}
                </div>
            )}
            renderItem={({ value, props }) => (
                <div {...props} key={value.title} >
                    <Todo todo={value}/>
                </div>
            )}
          />
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