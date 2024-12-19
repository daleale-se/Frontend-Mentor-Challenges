import { createContext, useReducer } from 'react';
import reducer from './Reducer';

const initialState = {
  loading: false,
  originalTodos: [],
  filteredTodos: []
}

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
const TodoProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return <TodoContext.Provider value={{dispatch, state}}>
        {children}
    </TodoContext.Provider>
}

export default TodoProvider



