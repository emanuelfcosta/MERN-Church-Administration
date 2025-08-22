import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/financial";

export const getAllFinancial = () => axios.get(REST_API_BASE_URL);

export const createFinancial = (financial) =>
  axios.post(REST_API_BASE_URL, financial);
