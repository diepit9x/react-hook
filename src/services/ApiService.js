import axios from "axios";
import { useParams } from "react-router-dom";

const postAddUser = (email, username, password, role, userImage) => {
  //submit data
  const data = new FormData();
  data.append("email", email);
  data.append("username", username);
  data.append("password", password);
  data.append("role", role);
  data.append("userImage", userImage);
  return axios.post("http://localhost:8081/api/v1/participant", data);
};

const getParticipant = (page, limit) => {
  const data = { params: { page: page, limit: limit } };

  return axios.get("http://localhost:8081/api/v1/participant", data);
};

export { postAddUser, getParticipant };
