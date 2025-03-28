import { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import ProjectDetails from "./ProjectDetails";
import { fetchProject } from "@store/projectSlice";

const ProjectPage = () => {

  const dispatch = useDispatch();
  const projectId = parseInt(useParams().id);
  const { details, loading, error } = useSelector(state => state.project);

  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [projectId]);

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

      {!!details && <ProjectDetails project={details} />}
    </>
    
  );
};

export default ProjectPage;