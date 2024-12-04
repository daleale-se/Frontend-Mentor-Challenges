export default function reducer(state, action) {

    switch (action.type) {
    case "check": {
        const todo = state.find(todo => todo.id === action.payload)
        const updatedTodo = {
            ...todo,
            checked: !todo.checked
        }
        const newTodos = state.filter(todo => todo.id !== action.payload)
        newTodos.push(updatedTodo)
        return newTodos;
    }
    case "remove":
      return state.filter(todo => todo.id !== action.payload)
    default:
      return "Unrecognized command";
  }
  
}
