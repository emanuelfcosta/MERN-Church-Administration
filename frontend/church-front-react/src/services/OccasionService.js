import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/occasions";

export const getAllOccasions = () => axios.get(REST_API_BASE_URL);

export const createOccasion = (occasion) =>
  axios.post(REST_API_BASE_URL, occasion);

export const getOccasionById = (occasionId) =>
  axios.get(REST_API_BASE_URL + "/" + occasionId);

export const updateOccasion = (occasionId, occasion) =>
  axios.put(REST_API_BASE_URL + "/" + occasionId, occasion);

export const deleteOccasion = (occasionId) =>
  axios.delete(REST_API_BASE_URL + "/" + occasionId);
