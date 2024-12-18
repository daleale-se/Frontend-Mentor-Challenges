import { createContext, useReducer, useState } from 'react';
import reducer from './Reducer';

// const initialState = {
//         loading: false,
//         originalTodos: [],
//         filteredTodos: []
// }

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
const TodoProvider = ({children}) => {

    const [todos, dispatch] = useReducer(reducer, []);
    const [filter, setFilter] = useState("show-all")

    const filteredTodos = () => {
        switch (filter) {
          case "show-all":
            return todos;
          case "show-completed":
            return todos.filter((todo) => todo.checked);
          case "show-actives":
            return todos.filter((todo) => !todo.checked);
          default:
            return todos;
        }
      }

    return <TodoContext.Provider value={{dispatch, todos, setFilter, filteredTodos}}>
        {children}
    </TodoContext.Provider>
}

export default TodoProvider



