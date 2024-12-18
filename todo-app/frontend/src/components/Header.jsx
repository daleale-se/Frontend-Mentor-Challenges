import TodoInput from "./TodoInput"

const getUserTodos = () => {
  const username = "manguete"
  fetch(`http://localhost:5000/todos/${username}`)
  .then(res => res.json())
  .then(data => console.log(data))
}

const Header = () => {
  return (
    <header>
        <div className="flex justify-between">
            <h1 className="uppercase">todo</h1>
            <button onClick={getUserTodos}>lightmode</button>
        </div>
        <TodoInput/>
    </header>
  )
}

export default Header