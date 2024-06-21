import { useState } from 'react';
import './App.css';
import Input from "./components/input";
import Border from "./components/border";


function App() {
    const [taskList, setTaskList] = useState([]);
    console.log(taskList)
    return ( <
            >
            <
            div className = 'px-12 ' >
            <
            div className = "flex flex-col items-center justify-center py-8 gap-4" >
            <
            h1 className = 'text-xl font-semibold ' > To Do Bard < /h1> <
            Input taskList = { taskList }
            setTaskList = { setTaskList }
            />


            <
            /div> <
            div className = 'sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12 flex flex-col gap-4' > {
                taskList.map((task, index) =>
                    <
                    Border key = { index }
                    task = { task }
                    index = { index }
                    taskList = { taskList }
                    setTaskList = { setTaskList }
                    />)}

                    <
                    /div> <
                    /div></ >
                );
            }

            export default App;