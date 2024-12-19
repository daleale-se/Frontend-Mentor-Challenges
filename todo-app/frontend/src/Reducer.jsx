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
        const updatedTodos = JSON.parse(JSON.stringify(state.originalTodos))
        const todo = updatedTodos.find(todo => todo.id === action.payload)
        todo.checked = !todo.checked;
        return {
          ...state,
          originalTodos: updatedTodos
        };
    }
    case "remove":{
      const updatedTodos = state.originalTodos.filter(todo => todo.id !== action.payload)
      return {
        ...state,
        originalTodos: updatedTodos
      }
    }
    case "create-todo": {
      const newTodo = {
        title: action.payload,
        id: new Date().valueOf(),
        checked: false
      }
      const updatedTodos = JSON.parse(JSON.stringify(state.originalTodos))
      updatedTodos.push(newTodo)
      return {
        ...state,
        originalTodos: updatedTodos
      }
    }
    case "clear-completed": {
      const updatedTodos = state.originalTodos.filter(todo => !todo.checked)
      return {
        ...state,
        originalTodos: updatedTodos
      }
    }
    case "reorder": {
      return {
        ...state,
        originalTodos: action.payload
      }
    }
    // is necessary?
    case "fetch-todos": {
      return {
        ...state,
        originalTodos: Array.isArray(action.payload) ? action.payload : state.originalTodos
      }
    }
    case "show-all": {
      return {
        ...state,
        filteredTodos: JSON.parse(JSON.stringify(state.originalTodos))
      }
    }
    case "show-completed": {
      return {
        ...state,
        filteredTodos: state.originalTodos.filter((todo) => todo.checked)
      }
    }
    case "show-actives": {
      return {
        ...state,
        filteredTodos: state.originalTodos.filter((todo) => !todo.checked)
      }
    }
    default:
      return "Unrecognized command";
  }
}
