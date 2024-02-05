import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todo: {
        id: Date.now(),
        msg: "",
        completed: false
    },
    addTodo: () => { },
    removeTodo: () => { },
    updateTodo: () => { },
    toggleTodo: () => { }
});

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

