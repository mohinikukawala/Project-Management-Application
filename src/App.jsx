import {useState} from 'react';
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import CreateProject from "./components/createProject/CreateProject";
import SelectedProject from './components/selectedProject/SelectedProject';

function App() {
  const[projects, setProjects] = useState([]);
  const[showCreateProject, setShowCreateProject] = useState(false);
  const[selectedProject, setSelectedProject] = useState(null);

  const onShowCreateProject = (value) => {
    setShowCreateProject(value);
  }

  const addProject = (newProject) => {
    setProjects(prevProjects => {
      const newProjects = [...prevProjects];
      newProjects.push(newProject);
      return newProjects
    });
  }

  const deleteProject = () =>{
    setProjects(prevProjects => {
      return prevProjects.filter(p => p.title !== selectedProject.title);
    })
  }

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  }

  const addTask = (newTasks) =>{
    setProjects(prevProjects => {
      const projects = [...prevProjects.map(p => {
        return{
          ...p,
          tasks: p.tasks && [...p.tasks]
        }
      })];
      const currentProject = projects.find(project => project.title === selectedProject.title);
      currentProject.tasks = newTasks;
    
      return projects;
    })
  }

  return (
    <section className='main-container'>
      <Sidebar showCreateProject={onShowCreateProject} projects={projects} handleProjectSelect={handleProjectSelect} selectedProject={selectedProject}/>
      {!selectedProject && !showCreateProject && <NoProjectSelected onShowCreateProject={onShowCreateProject}/>}
      {!selectedProject && showCreateProject && <CreateProject onAddProject={addProject} onShowCreateProject={onShowCreateProject}/>}
      {selectedProject && <SelectedProject 
                                project={selectedProject}
                                tasks={projects.find(p => p.title === selectedProject.title).tasks}
                                onDeleteProject={deleteProject} 
                                emptySelectedProject={handleProjectSelect}
                                onAddTask={addTask}/>}
    </section >
  );
}

export default App;
