import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTask = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState();

 
    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }
    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setStatus(taskObj.Status)
    },[taskObj.Description, taskObj.Name,taskObj.Status])



    const handleChangeStatus = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj['Status'] = "Done"       
        updateTask(tempObj)
    }


    
    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Editar </ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Titulo</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Descripcion</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="dark" onClick={handleUpdate}>Aceptar</Button>
            <Button color="primary" onClick={handleChangeStatus}>Accion</Button>
            
            </ModalFooter>
      </Modal>
    );
};

export default EditTask;