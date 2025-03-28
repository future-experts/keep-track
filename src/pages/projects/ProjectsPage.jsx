import { useEffect } from 'react';
import ProjectsList from "./ProjectsList";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '@store/projectsSlice';

const ProjectsPage = () => {

  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

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
      {items && items.length && <ProjectsList projects={items} />}
    </>
  );
};

export default ProjectsPage;