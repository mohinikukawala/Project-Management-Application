import classes from './CreateProject.module.css';
import Button from '../button/Button.jsx';
import {useRef} from 'react';
import ErrorModal from '../errorModal/ErrorModal.jsx';

const CreateProject = ({onAddProject, onShowCreateProject}) => {
    const title = useRef();
    const description = useRef();
    const date = useRef();
    const errorModalRef = useRef();

    const saveProject = () => {
        if(title.current.value == "" || description.current.value == "" || date.current.value == ""){
            errorModalRef.current.open();
        } else {
            const newProject = {
                title : title.current.value,
                description: description.current.value,
                dueDate: date.current.value,
                tasks:[]
            }
    
            onAddProject(newProject);
            onShowCreateProject(false);
        }
    }

    return(
        <>
        <div className={classes.CreateProjectContainer}>
            <div className = {classes.btnContainer}>
                <Button className={classes.secondaryButton} onClick={() => onShowCreateProject(false)}>Cancel</Button>
                <Button className={classes.primaryButton} onClick={saveProject}>Save</Button>
            </div>
            <div className={classes.formFieldGroup}>
                <label>TITLE</label>
                <input ref={title} type="text" />
            </div>
            <div className={classes.formFieldGroup}>
                <label>Description</label>
                <textarea ref={description}/>
            </div>
            <div className={classes.formFieldGroup}>
                <label>DUE DATE</label>
                <input ref={date} type="date" />
            </div> 
        </ div>
        <ErrorModal ref={errorModalRef}>
            <h2>Invalid Input</h2>
            <p>Oops ... looks like you forgot to enter a value.</p>
            <p>Please make sure you provide a valid value for every input field.</p>
        </ErrorModal>
        </>
    )
}

export default CreateProject;