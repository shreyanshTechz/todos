import { useTodo } from "../context/TodoContext"
import { useState } from "react";
export default function TodoForm() {
    const [msgValue, setmsgValue] = useState("");
    const {addTodo} = useTodo();
    const add = ()=>{
        addTodo({id:Date.now(),msg:msgValue,completed:false})
    }
  return (
    <div className="flex">
        <input className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5" value={msgValue} onChange={(e)=>setmsgValue(e.target.value)} type="text" />
        <button className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"  onClick={add}>Create</button>
    </div>
  )
}
