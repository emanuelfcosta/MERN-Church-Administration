import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/prayers";

export const getAllPrayers = () => axios.get(REST_API_BASE_URL);
