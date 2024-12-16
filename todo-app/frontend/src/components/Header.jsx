import TodoInput from "./TodoInput"

const Header = () => {
  return (
    <header>
        <div className="flex justify-between">
            <h1 className="uppercase">todo</h1>
            <span>lightmode</span>
        </div>
        <TodoInput/>
    </header>
  )
}

export default Header