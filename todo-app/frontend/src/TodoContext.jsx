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

    const [todos, dispatch] = useReducer(reducer, initialState);
    const [filter, setFilter] = useState("show-all")

    const filteredTodos = () => {
        switch(filter) {
            case "show-all": return todos
            case "show-completed" : return todos.filter(todo => todo.checked)
            case "show-actives" : return todos.filter(todo => !todo.checked)
        }
    }

    return <TodoContext.Provider value={{dispatch, todos, setFilter, filteredTodos}}>
        {children}
    </TodoContext.Provider>
}

export default TodoProvider



