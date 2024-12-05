import { createContext, useReducer, useState } from 'react';
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

    const [filter, setFilter] = useState("all")
    const [todos, dispatch] = useReducer(reducer, initialState);

    const filteredTodos = () => {
        if (filter === "all") {
            return todos;
        } else if (filter === "completed") {
            return todos.filter(todo => todo.checked)
        } else if (filter === "active") {
            return todos.filter(todo => !todo.checked)
        }
    }

    return <TodoContext.Provider value={{dispatch, setFilter, filteredTodos}}>
        {children}
    </TodoContext.Provider>
}

export default TodoProvider



