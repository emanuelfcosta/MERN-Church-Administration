import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/studies";

export const getAllStudy = () => axios.get(REST_API_BASE_URL);

export const createStudy = (study) => axios.post(REST_API_BASE_URL, study);

export const getStudyById = (studyId) =>
  axios.get(REST_API_BASE_URL + "/" + studyId);

export const updateStudy = (studyId, study) =>
  axios.put(REST_API_BASE_URL + "/" + studyId, study);
