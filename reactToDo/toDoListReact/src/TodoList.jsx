import React, { useEffect, useState } from "react";


function ToDoList(params) {

    const [tasks, setTasks] = useState(![]?persistedData:[]);
    const [newTask, setNewTask] = useState("");
    const persistedData = localStorage.getItem("task-list")

    useEffect(() => {

        if(persistedData) {

            
            setTasks(JSON.parse(persistedData));
            [...tasks]
            console.log("after", persistedData);
            console.log("after tasks!!!", tasks);
 }
})


    useEffect(() => {

        localStorage.setItem("task-list", JSON.stringify(tasks));
        console.log('stringify-ed tasklist', tasks);

    }, [tasks]);

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
            <h1 className="font-serif text-9xl m-3 bg-cyan-500 border-2 border-black">To-Do List</h1>
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
        <div>
        <h2 className= "font-serif text-4xl m-3 text-cyan-700"> Resources</h2>
        <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" className= "font-serif text-2xl">Work</h5>
        <p class="card-text m-2">Click below to go to the MyCase sign-on page for work assignments</p>
        <a href="https://www.mycase.com/login/" class="btn btn-outline-info" target="_blank">MyCase</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"className= "font-serif text-2xl">School</h5>
        <p class="card-text m-2">Click below to go to the Canvas homepage for school assignments</p>
        <a href="https://discovery.canvas.txst.edu/" class="btn btn-outline-info" target="_blank">Canvas</a>
      </div>
    </div>
  </div>
</div>




        </div>

        </div>
    ) 
}


export default ToDoList ;