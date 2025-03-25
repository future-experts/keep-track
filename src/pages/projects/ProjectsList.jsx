import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

const ProjectsList = ({ projects, onSave }) => {

  const [projectId, setProjectId] = useState(null);

  const selectProject = selectedId => setProjectId(selectedId);
  const onCancel = () => setProjectId(null);

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