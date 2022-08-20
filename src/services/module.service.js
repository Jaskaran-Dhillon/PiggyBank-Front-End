import axios from "../axios";
const domain = process.env.REACT_APP_API_URL;

const getQuestions = async (module) => {
  return await axios.get(`${domain}/${module}`);
};

const updateModuleStatus = async ({ userId, module, coins }) => {
  return await axios.put(`${domain}/${userId}/${module}`, { coins });
};

export const moduleService = {
  getQuestions,
  updateModuleStatus,
};
