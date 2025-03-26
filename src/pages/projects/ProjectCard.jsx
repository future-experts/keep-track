import dayjs from 'dayjs';
import { Link } from 'react-router';

const ProjectCard = ({ project, onSelect }) => {

  const handleClick = () => onSelect(project.id);

  return (
    <div className='card'>
      <img src={`/thumbs/${project.imageUrl}.webp`} alt={project.name} />
      <div className='section dark'>
      <h3><Link to={`/projects/${project.id}`}>{project.name}</Link></h3>
      <p>{project.description}</p>
      <p>Signed on: {dayjs(project.contractSignedOn).format('DD. MMMM YYYY.')}</p>
      <p>Budget: $ {project.budget.toLocaleString()}</p>
      <button className='primary bordered' onClick={handleClick}>EDIT</button>
      </div>
    </div>
  );
};

export default ProjectCard;