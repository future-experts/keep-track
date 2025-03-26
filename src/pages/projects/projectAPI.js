import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "token 123456"
  }
});

export const getProjects = async () => {
  const response = await request.get(`projects?_page=1&_limit=12`);
  return response.data;
}

export const getProject = async id => {
  const response = await request.get(`projects/${id}`);
  return response.data;
}

export const updateProject = async (data) => {
  const response = await request.put(`projects/${data.id}`, data);
  return response.data;
}