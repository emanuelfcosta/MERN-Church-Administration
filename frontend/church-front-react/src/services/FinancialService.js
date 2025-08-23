import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/financial";

export const getAllFinancial = () => axios.get(REST_API_BASE_URL);

export const createFinancial = (financial) =>
  axios.post(REST_API_BASE_URL, financial);

export const getFinancialById = (financialId) =>
  axios.get(REST_API_BASE_URL + "/" + financialId);

export const updateFinancial = (financialId, financial) =>
  axios.put(REST_API_BASE_URL + "/" + financialId, financial);

export const deleteFinancial = (financialId) =>
  axios.delete(REST_API_BASE_URL + "/" + financialId);
