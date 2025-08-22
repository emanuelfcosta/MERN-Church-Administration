import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/prayers";

export const getAllPrayers = () => axios.get(REST_API_BASE_URL);

export const createPray = (pray) => axios.post(REST_API_BASE_URL, pray);

export const getPrayById = (prayId) =>
  axios.get(REST_API_BASE_URL + "/" + prayId);

export const updatePray = (prayId, pray) =>
  axios.put(REST_API_BASE_URL + "/" + prayId, pray);

export const deletePray = (prayId) =>
  axios.delete(REST_API_BASE_URL + "/" + prayId);
