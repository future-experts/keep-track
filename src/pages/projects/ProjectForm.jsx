import dayjs from "dayjs";
import { useState } from "react";

const ProjectForm = ({ project: initialProject, onCancel, onSubmit }) => {

  const [project, setProject] = useState(initialProject);
  const [error, setError] = useState({ name: '', desc: '', budget: '' });

  const validate = project => {
    let err = {name:'', description:'', budget:''}
    err.name = !project.name ? 'name is required' : '';
    err.desc = !project.desc ? 'description is required' : '';
    err.budget = !project.budget ? 'budget is required' : '';
    console.log(err)
    setError(err);
  }

  const isValid = () => !(error.name || error.desc || error.budget);

  const handleChange = event => {
    const { name, value, checked, type } = event.target;
    let updValue = type === 'checkbox' ? checked : value;
    let newProject;
    setProject(project => {
      newProject = { ...project, [name]: updValue };
      return newProject;
    });
    validate (newProject);
  }

  const submitForm = event => {
    event.preventDefault();
    if (isValid) onSubmit(project);
  }

  return (
    <div style={{ maxHeight: '408px', backgroundColor: '#eee' }}>
      <form className='input-group vertical' onSubmit={submitForm}>
        <label htmlFor="name">
          Project Name
        </label>
        {!!error.name && <div className='error'>{error.name}</div>}
        <input type="text"
          id="name" name="name"
          value={project.name}
          onChange={handleChange}
          placeholder="enter name" />

        <label htmlFor="description">
          Project Description
        </label>
        {!!error.desc && <div>{error.desc}</div>}
        <textarea
          id="description" name="description"
          rows={3}
          value={project.description}
          onChange={handleChange}
          placeholder="enter description" />

        <label htmlFor="budget">
          Project Budget
        </label>
        {!!error.budget && <div>{error.budget}</div>}
        <input type="number"
          id="budget" name="budget"
          value={project.budget}
          onChange={handleChange}
          placeholder="enter budget" />

        <label htmlFor="contractSignedOn">Contract Signed On</label>
        <input type="date"
          value={dayjs(project.contractSignedOn).format('YYYY-MM-DD')}
          onChange={handleChange}
          id="contractSignedOn" name="contractSignedOn" />

        <label htmlFor="isActive">Active?</label>
        <input type="checkbox"
          checked={project.isActive}
          onChange={handleChange}
          id="isActive" name="isActive" />

        <div className="input-group">
          <button type="submit" className="primary bordered medium">Save</button>
          <button type="button" className="bordered medium" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;