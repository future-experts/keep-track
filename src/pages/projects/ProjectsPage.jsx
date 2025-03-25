import { useState } from 'react';
import { MOCK_PROJECTS } from "./mockProjects";
import ProjectsList from "./ProjectsList";

const ProjectsPage = () => {

  const [projects, setProjects] = useState(MOCK_PROJECTS);

  const updateProjects = project => {
    let updatedProjects = projects.map(
      p => { return p.id === project.id ? project : p; });
    setProjects(updatedProjects);
  }

  return (
    <ProjectsList projects={projects} onSave={updateProjects} />
  );
};

export default ProjectsPage;