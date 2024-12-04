import { createContext, useReducer } from 'react';
import reducer from './Reducer';

const initialState = [
    {title:"todo1",checked:false,id:"0"},
    {title:"todo2",checked:true,id:"1"},
    {title:"todo3",checked:false,id:"2"}
]

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
const TodoProvider = ({children}) => {

    const [todos, dispatch] = useReducer(reducer, initialState);

    return <TodoContext.Provider value={{dispatch, todos}}>
        {children}
    </TodoContext.Provider>
}

export default TodoProvider



