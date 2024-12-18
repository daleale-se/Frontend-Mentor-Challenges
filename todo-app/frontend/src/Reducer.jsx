// const getUserTodos = () => {
//   const username = "manguete"
//   fetch(`http://localhost:3000/todos/${username}`)
//   .then(res => res.json())
//   .then(data => data)
// }

// const getUserTodos = async (username) => {
//   const response = await fetch(`http://localhost:3000/todos/${username}`);
//   const data = await response.json();
//   return data;
// };


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
    case "reorder": {
      return action.payload
    }
    case "fetch-todos": {
      return Array.isArray(action.payload) ? action.payload : state;
    }
    default:
      return "Unrecognized command";
  }
}
