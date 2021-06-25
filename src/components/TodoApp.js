import "./todoapp.css";
import React, {useState, useEffect} from 'react';
import CreateTask from "../modals/CreateTask";
import Card from './Card';


const TodoApp = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([])
  const [buscador,setBuscador] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("taskList")
   
    if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
    }
}, [])
const deleteTask = (index) => {
  let tempList = taskList
  tempList.splice(index, 1)
  localStorage.setItem("taskList", JSON.stringify(tempList))
  setTaskList(tempList)
  window.location.reload()
}

const updateListArray = (obj, index) => {
  let tempList = taskList
  tempList[index] = obj
  localStorage.setItem("taskList", JSON.stringify(tempList))
  setTaskList(tempList)
  window.location.reload()
}

  const toggle = () => {
    setModal(!modal);

  }
  const handleChange = (e) => {
        
    const {value} = e.target

     setBuscador(value)
   
}


  const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    setTaskList(tempList)
    setModal(false)
    
}
    return (
      <>
         <div className="todo">
         <div className="todo" align ="center">
             <button className="add-btn" onClick = {() => setModal(true)}>Create
            </button> <br/>
            <input type="text" name="buscador" placeholder="Search..." value = {buscador} onChange = {handleChange}
      />
      </div>
        </div>
        <div className="task-container">
        {taskList && taskList.filter(task => task.Description.includes(buscador)).map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
        </div>
        <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        
      </>
    );
};

export default TodoApp;
