import classes from './Sidebar.module.css';
import Button from './button/Button.jsx';

const Sidebar = ({projects, showCreateProject, handleProjectSelect, selectedProject}) => {

    const onProjectSelection = (project) => {
        handleProjectSelect(project);
    }

    return(
        <div className={classes.sideBar}>
            <h2>YOUR PROJECTS</h2>
            {projects.length > 0 
            ? projects.map( project => {

                let btnStyle= classes.listButtonStyle;
                if(project.title === selectedProject?.title){
                    btnStyle = btnStyle.concat(" " + classes.activeBtn);
                }

                return <li key={project.title}>
                    <Button className={btnStyle} onClick={() => {onProjectSelection(project)}}>{ project.title }</Button>
                </li>
                })
            : <Button onClick={() => showCreateProject(true)}>+ Add Project</Button>}
            
        </div>
    )
}

export default Sidebar;