import axios from "../axios";
const domain = process.env.REACT_APP_API_URL;

const login = async (data) => {
  return await axios.post(`${domain}/user/auth`, data);
};

const createUser = async (data) => {
  return await axios.post(`${domain}/user/signup`, data);
};

export const authService = {
  login,
  createUser
};
