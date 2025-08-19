import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/occasions";

export const getAllOccasions = () => axios.get(REST_API_BASE_URL);

export const createOccasion = (occasion) =>
  axios.post(REST_API_BASE_URL, occasion);
