const Border=({task,index,taskList,setTaskList}) =>{
    const handelDelete=() =>{
        let　removeIndex=taskList.indexOf(task);
        taskList.splice(removeIndex,1);
        setTaskList((currentTasks=>currentTasks.filter(todo=>index===removeIndex))

        )}
    return(
        <>
        <div className="flex flex-col items-center justify-start border rounded-xl text-center text-lg max-w-xl pt-2 pb-4 px-2 md:px-4 ">
            <p>
                {task}
            </p>
            <button className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4 " 
            onClick={handelDelete}>
                Delete
            </button>
        </div>

        </>
    )
}
export default Border;