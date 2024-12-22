import TodoInput from "./TodoInput"


const Header = () => {
  return (
    <header>
        <div className="flex justify-between">
            <h1 className="uppercase">todo</h1>
            <button onClick={() => {}}>lightmode</button>
        </div>
        <TodoInput/>
    </header>
  )
}

export default Header