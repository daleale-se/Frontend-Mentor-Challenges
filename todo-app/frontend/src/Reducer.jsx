const applyFilter = (todos, filter) => {
  switch (filter) {
    case "show-completed":
      return todos.filter((todo) => todo.checked);
    case "show-actives":
      return todos.filter((todo) => !todo.checked);
    default:
      return todos;
  }
};

export default function reducer(state, action) {
    switch (action.type) {
    case "check": {
        const updatedTodos = JSON.parse(JSON.stringify(state.originalTodos))
        const todo = updatedTodos.find(todo => todo.id === action.payload)
        todo.checked = !todo.checked;
        return {
          ...state,
          originalTodos: updatedTodos,
          filteredTodos: applyFilter(updatedTodos, state.filter),
        };
    }
    case "remove":{
      const updatedTodos = state.originalTodos.filter(todo => todo.id !== action.payload)
      return {
        ...state,
        originalTodos: updatedTodos,
        filteredTodos: applyFilter(updatedTodos, state.filter),
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
        originalTodos: updatedTodos,
        filteredTodos: applyFilter(updatedTodos, state.filter),
      }
    }
    case "clear-completed": {
      const updatedTodos = state.originalTodos.filter(todo => !todo.checked)
      return {
        ...state,
        originalTodos: updatedTodos,
        filteredTodos: applyFilter(updatedTodos, state.filter),
      }
    }
    case "reorder": {
      return {
        ...state,
        originalTodos: action.payload,
        filteredTodos: applyFilter(action.payload, state.filter),
      }
    }
    case "set-filter": {
      return {
        ...state,
        filter: action.payload,
        filteredTodos: applyFilter(state.originalTodos, action.payload),
      };
    }
    default:
      return state;
  }
}
