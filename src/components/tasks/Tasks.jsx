import Button from '../button/Button.jsx';
import classes from './Tasks.module.css';
import { useState } from 'react';

const Tasks = ({tasks, handleAddTask}) => {

    const[enteredTask, setEnteredTask] = useState();
    console.log(tasks);

    let taskContent = <p>This project doesn't have any tasks yet.</p>;

    if(tasks.length > 0){
        taskContent = <ul>
            {
            tasks.map(task => {
                return(<span>
                    <li key={task.id}>{task.name}</li>
                    <Button onClick={() => {deleteTask(task.id)}}>Clear</Button>
                </span>)
            })
            }
        </ul>
    }

    const deleteTask = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        handleAddTask(newTasks);
    }
    
    const saveTask = () => {
        const newTask = {
                "name": enteredTask, 
                "id": +Math.random()*10
        }

        const newTasks = [...tasks];
        newTasks.push(newTask);
        handleAddTask(newTasks)
        setEnteredTask('');
    }

    return (
        <div className={classes.tasksContainer}>
            <h2>Tasks</h2>
            <input type="text" value={enteredTask} onChange={(event) => setEnteredTask(event.target.value)}/>
            <Button onClick={saveTask}>+ New Task </Button>
            {taskContent}
        </div>
    )
}

export default Tasks;