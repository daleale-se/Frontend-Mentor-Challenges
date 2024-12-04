import Todo from "./Todo"

const todos = [
    {title:"todo1",checked:false},
    {title:"todo2",checked:true},
    {title:"todo3",checked:false}
]

const todosActive = todos.filter(todo => !todo.checked) 

const TodoList = () => {
  return (
    <div>
      <div>
          {todos.map(todo => {
              return <Todo key={todo.title} todo={todo}/>
          })}
      </div>
      <div className="flex justify-between">
        <p>{todosActive.length} items left</p>
        <p>clear completed</p>
      </div>
    </div>
  )
}

export default TodoList