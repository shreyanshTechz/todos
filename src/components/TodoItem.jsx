import { useTodo } from "../context/TodoContext";
import { useState } from "react";
export default function TodoItem(todo) {
  const {id,msg,completed} = todo.todo;
  const {updateTodo,removeTodo, toggleTodo } = useTodo();
  const [todomsg, settodomsg] = useState(msg);
  const [editable, seteditable] = useState(false);

  const editTodo = () => {
    updateTodo(id, {...todo, msg: todomsg})
    seteditable(false);
  }
  const toggle = () => {
    toggleTodo(id);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          editable ? "border-black/10 px-2" : "border-transparent"
        } ${completed ? "line-through" : ""}`}
        onChange={(e) => settodomsg(e.target.value)}
        value={todomsg}
        readOnly={!editable}
        // onClick={() => seteditable((prev) => !prev)}
      />
      <input
        type="checkbox"
        name="checked"
        className="cursor-pointer"
        checked={completed}
        onChange={toggle}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (completed) return;
          if (editable) {
            editTodo();
          } else seteditable((prev) => !prev);
          console.log(editable);
        }}
        disabled={completed}
      >
        {editable ? "📁" : "✏️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => removeTodo(id)}
      >
        ❌
      </button>
    </div>
  );
}
