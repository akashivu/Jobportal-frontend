import api from './api';

export const getAllJobs = async () => {
  try {
    const response = await api.get('/api/jobs');
    return response.data;
  } catch (error) {
    console.error('Get jobs error:', error);
    throw error;
  }
};


export const searchJobs = async (title, location) => {
  try {
    const response = await api.get('/api/job/search', {
      params: { title, location }
    });
    return response.data;
  } catch (error) {
    console.error('Search jobs error:', error);
    throw error;
  }
};


export const postJob = async (jobData) => {
  try {
    const response = await api.post('/api/job', jobData);
    return response.data;
  } catch (error) {
    console.error('Post job error:', error);
    throw error;
  }
};
