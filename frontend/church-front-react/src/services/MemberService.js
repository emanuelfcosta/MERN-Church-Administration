import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/members";

export const getAllMembers = () => axios.get(REST_API_BASE_URL);

export const createMember = (member) => axios.post(REST_API_BASE_URL, member);

export const getMemberById = (memberId) =>
  axios.get(REST_API_BASE_URL + "/" + memberId);

export const updateMember = (memberId, member) =>
  axios.put(REST_API_BASE_URL + "/" + memberId, member);

export const deleteMember = (memberId) =>
  axios.delete(REST_API_BASE_URL + "/" + memberId);
