import { Link } from "react-router";
import dayjs from "dayjs";
import Calendar from "@components/Calendar";

const ProjectDetails = ({ project }) => {

  if(!project) return null;
  
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <h1>{project.name}</h1>
          <div className="card large">
            <img
              className="rounded"
              src={`/images/${project.imageUrl}.jpg`}
              alt={project.name}
            />
            <section className="section dark">
              <p>{project.description}</p>
              <p>Budget : $ {project.budget}</p>
              <p>Signed: {dayjs(project.contractSignedOn).format("MMMM DD, YYYY.")}</p>
            </section>
          </div>
        </div>
        <div className="col-sm-6">
          {project.calendar && <Calendar data={project.calendar} />}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1">
          <div className={`project ${project.isActive ? 'active' : 'inactive'}`} />
        </div>
        <div className="col-sm-3" style={{ textAlign: 'right' }}>
          <Link to='/projects'><button className='primary'>Back to projects</button></Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;