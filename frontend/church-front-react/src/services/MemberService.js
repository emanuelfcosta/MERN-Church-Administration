import axios from "axios";

const REST_API_BASE_URL = "http://localhost:5000/api/v1/members";

export const getAllMembers = () => axios.get(REST_API_BASE_URL);

export const createMember = (member) => axios.post(REST_API_BASE_URL, member);
