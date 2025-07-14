import axios from 'axios';

const API_URL = 'http://localhost:8080/api/jobs';


export const getAllJobs = () => axios.get(API_URL);
export const postJob = (jobData) => axios.post(API_URL, jobData);
export const getJobById = (id) => axios.get(`${API_URL}/${id}`);
export const deleteJob = (id) => axios.delete(`${API_URL}/${id}`);
export const updateJob = (id, jobData) => axios.put(`${API_URL}/${id}`, jobData);


export const searchJobs = (company = '', location = '') => {
  const params = new URLSearchParams();
  if (company) params.append('company', company);
  if (location) params.append('location', location);

  return axios.get(`${API_URL}/search?${params.toString()}`);
};
