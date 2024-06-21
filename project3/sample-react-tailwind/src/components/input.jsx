import { useState } from "react"
const Input = ({taskList,setTaskList}) =>{
    const [input, setInput] =useState("")
    const handleaddTask=(e) => {
        e.preventDefault();
        setTaskList([...taskList,input]);
        setInput("");
    }
    return (
        <>
        
            <form className="flex flex-row items-center gap-3" action="">
                <input className="border rounded  text-lg px-2 py-1" type="text" placeholder="add a task" value={input} 
                onChange={(e) =>setInput(e.target.value)} />
                <button className="bg-violet-400 text-white py-2 px-3 rounded-lg hover:opacity-70" onClick={handleaddTask}>add</button>
            </form>
        
        
        </>
    )
}
export default Input