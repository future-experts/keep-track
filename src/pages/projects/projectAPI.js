import axios from "axios";

const url = "http://localhost:4000/projects";

export const getProjects = async () => {
  const response = await axios.get(`${url}?_page=1&_limit=12`);
  return response.data;
}

export const getProject = async id => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
}

export const updateProject = async (data) => {
  const response = await axios.put(`${url}/${data.id}`, data);
  return response.data;
}