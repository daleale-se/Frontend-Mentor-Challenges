import Todo from "./Todo"

const todos = [
    {title:"todo1",checked:false},
    {title:"todo2",checked:true},
    {title:"todo3",checked:false}
]

const TodoList = () => {
  return (
    <div>
        {todos.map(todo => {
            return <Todo key={todo.title} todo={todo}/>
        })}
    </div>
  )
}

export default TodoList