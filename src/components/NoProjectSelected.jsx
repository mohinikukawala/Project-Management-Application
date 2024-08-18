import classes from './NoProjectSelected.module.css';
import noProjectImage from '../assets/no-projects.png';
import Button  from '../components/button/Button.jsx';

const NoProjectSelected = ({onShowCreateProject}) => {
    return(
        <div className={classes.mainContent}>
            <img src={noProjectImage} className={classes.img_display}/>
            <h3>No Projects Selected</h3>
            <p>Select a project or get started with a new one</p>
            <Button onClick = {() => onShowCreateProject(true)}>Create new project</Button>
        </div>
    )
}

export default NoProjectSelected;