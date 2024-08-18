import Button from '../button/Button.jsx';
import classes from './SelectedProject.module.css';
import Tasks from '../tasks/Tasks.jsx';

const SelectedProject = ({project, tasks, onDeleteProject, emptySelectedProject, onAddTask}) => {
    
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    const deleteProject = () => {
        onDeleteProject();
        emptySelectedProject(null);
    }
    
    return(
        <div className={classes.selectedProjectContainer}>
            <header className={classes.headerStyle}>
                <div className={classes.projectNameContainer}>
                    <h1>{project.title}</h1>
                    <Button onClick={deleteProject}>Delete</Button>
                </div>
                <p className={classes.date}>{formattedDate}</p>
                <p>{project.description}</p>
            </header>
            <hr></hr>
            <Tasks tasks={tasks} handleAddTask={onAddTask}/>
        </div>
    )
}

export default SelectedProject;