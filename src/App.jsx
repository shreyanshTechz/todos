import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import {TodoProvider} from "./context/TodoContext";
import { useEffect } from "react";
function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todo) => {
    if(todo.msg === "") return;
    let ispresent = false;
    for (let index = 0; index < todos.length; index++) {
      if(todos[index].msg === todo.msg) ispresent = true
    }
    if(ispresent) return;
    settodos((prev) => [...prev, todo]);
  };
  const removeTodo = (id) =>{
    settodos((prev)=>prev.filter((element)=>element.id !=id));
  }
  const toggleTodo = (id)=>{
    settodos((prev)=>prev.map((element)=>{
      return element.id === id ? {...element,completed:!element.completed} : element
    }))
  };
  const updateTodo = (id,todo)=>{
    settodos((prev)=>prev.map((element)=>{
      return element.id === id ? todo : element
    }))
  };


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
     settodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos,addTodo,removeTodo,toggleTodo,updateTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl text-green-400 font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
            <TodoItem todo={todo} />
            </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
