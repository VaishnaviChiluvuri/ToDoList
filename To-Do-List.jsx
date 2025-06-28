import React,{useState} from 'react';

function ToDoList(){
    const [tasks,setTask] = useState(["Eat BreakFast"," Do shower","Go to college"]);
    const [newTask,setNewTask] = useState([]);

    function handleInputChange(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
        setTask(tasks=>[...tasks,newTask])
        setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i)=> i !==index);
        setTask(updatedTasks);
    }

    return(
        <>
            <div className="container">
                <h2> To-do List Application</h2>
                <div className="c1">
                    <input className="input" type="text" placeholder="Enter a task.." value={newTask} onChange={handleInputChange}/>
                    <button className="Add-button" onClick={addTask}> Add </button>
                </div>

                <ol>
                    {tasks.map((task,index)=>
                        <li key={index} onToggle={TaskCompleted}> 
                            <span className="task">{task} </span>
                            <button className="Delete-button" onClick={()=>deleteTask(index)}> Delete </button>
                        </li>
                    )}
                </ol> 
            </div>
        </>
    );
}
export default ToDoList;