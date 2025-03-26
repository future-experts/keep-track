import { useState, useEffect } from 'react';
import ProjectsList from "./ProjectsList";
import { getProjects, updateProject } from './projectAPI';

const ProjectsPage = () => {

  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const updateProjects = async project => {
    setLoading(true);
    try {
      let updProject = await updateProject(project);
       let updatedProjects = projects.map(
        p => { return p.id === updProject.id ? updProject : p; });
      setProjects(updatedProjects);        
    } catch (error) {
      setError(error.message);      
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading && (
        <div className='center-page'>
          <span className='spinner primary' />
          <p>Loading...</p>
        </div>
      )}
      {!!error && (
        <div className='center-page error'>
          <span className='icon-alert inverse' />
          <span className='err-message'>{error}</span>
        </div>
      )}
      <ProjectsList projects={projects} onSave={updateProjects} />
    </>
  );
};

export default ProjectsPage;