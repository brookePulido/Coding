import React, { useState } from "react";


function ToDoList(params) {

    const [tasks, setTasks] = useState(['Shower', 'Walk the dog', 'Start ethics paper']);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1 className="font-serif text-9xl m-3">To-Do List</h1>
            <div className="border-2 border-primary-600 m-20">
            <div>
                <input
                    className="p-2 m-2"
                    type="text"
                    placeholder="What task would you like to add?"
                    value={newTask}
                    onChange={handleInputChange}
                
                ></input>
                <button
                className="m-2 add-btn bg-white hover:bg-yellow-100 text-black font-bold py-2 px-4 border-b-4 border border-primary-700 hover:border-yellow-300 rounded"
                onClick={addTask}>Add Task</button>
            </div>

            <ol> 
                {tasks.map((task, index) =>

                    <li key={index}>
                        <span className="font-sans text-xl p-10 m-2">{task}</span>
                        <button className="delete-button m-2 add-btn bg-white hover:bg-red-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                onClick={()=>deleteTask (index)}>
                                Delete Task
                                </button>

                                <button className="move-button m-2 add-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                onClick={()=>moveUp (index)}>
                                👆
                                </button>

                                <button className="move-button m-2 add-btn bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                                onClick={()=>moveDown (index)}>
                                👇
                                </button>

                    </li>
                
                )}
                
            </ol>
    
    
    
    
        </div>
        </div>
    ) 
}


export default ToDoList ;