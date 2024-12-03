/* eslint-disable react/prop-types */

const Todo = ({todo}) => {
  return (
    <div className="flex gap-5">
        <span className="border border-slate-400 h-8 w-8 rounded-full"></span>
        <p className={todo.checked?"line-through":""}>{todo.title}</p>
        <span>x</span>
    </div>
  )
}

export default Todo