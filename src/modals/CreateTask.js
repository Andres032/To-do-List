import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {API} from '../enviroment/api';


const CreateTask = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

   



    const random = async function  () {
        let log = await API.get("fact");
        setDescription(log.data.fact)
        return await API.get("fact");
    } 
    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }
        


    }


    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["Status"] = "Pending"
        save(taskObj)

        
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Crear</ModalHeader>
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
                <Button color="dark" onClick={handleSave}>Crear</Button>
                <Button color="primary" onClick={() => random()}>Frase</Button>
                
                
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;