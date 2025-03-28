import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProject } from "./projectAPI";
import { updateProjects } from "@store/projectsSlice";

import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

const ProjectsList = ({ projects }) => {

  const dispatch = useDispatch();
  const [projectId, setProjectId] = useState(null);

  const selectProject = selectedId => setProjectId(selectedId);

  const onCancel = () => setProjectId(null);

  const onSave = async project => {
    let updProject = await updateProject(project);
    dispatch(updateProjects(updProject));
    setProjectId(null);
  }

  return (
    <>
      <h1>Projects</h1>
      <div className='row'>
        {projects.map((project, index) => (
          <div key={index} className='cols-sm'>
            {project.id === projectId ?
              <ProjectForm project={project} 
                onCancel={onCancel} 
                onSubmit={onSave} /> :
              <ProjectCard project={project} onSelect={selectProject} />
            }
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsList; 