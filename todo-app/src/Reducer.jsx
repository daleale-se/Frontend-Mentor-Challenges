export default function reducer(state, action) {

    switch (action.type) {
    case "check": {
        const updatedTodos = JSON.parse(JSON.stringify(state))
        const todo = updatedTodos.find(todo => todo.id === action.payload)
        todo.checked = !todo.checked;
        return updatedTodos;
    }
    case "remove":
      return state.filter(todo => todo.id !== action.payload)
    case "create-todo": {
      const newTodo = {
        title: action.payload,
        id: new Date().valueOf(),
        checked: false
      }
      const updatedTodos = JSON.parse(JSON.stringify(state))
      updatedTodos.push(newTodo)
      return updatedTodos;
    }
    case "clear-completed": {
      return state.filter(todo => !todo.checked)
    }
    default:
      return "Unrecognized command";
  }
  
}
