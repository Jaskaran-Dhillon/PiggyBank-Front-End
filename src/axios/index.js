import axios from "axios";

//const authToken = JSON.parse(localStorage.getItem("user"))?.token;

const instance = axios.create({
  // headers: {
  //   Authorization: `Bearer ${authToken}`
  // },
});

export default instance;
