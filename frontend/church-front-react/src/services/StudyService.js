import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/study/";

export const getAllStudy = () => axios.get(REST_API_BASE_URL);
