import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProjectDetails from "./ProjectDetails";
import { getProject } from "./projectAPI";

const ProjectPage = () => {

  const projectId = parseInt(useParams().id);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const data = await getProject(projectId);
      setProject(data);
    }
    fetchProject();
  }, [projectId]);

  return (
    <ProjectDetails project={project} />
  );
};

export default ProjectPage;