import axios from "../utils/axiosCustomize";

const postAddUser = (email, username, password, role, userImage) => {
  //submit data
  const data = new FormData();
  data.append("email", email);
  data.append("username", username);
  data.append("password", password);
  data.append("role", role);
  data.append("userImage", userImage);
  return axios.post("participant", data);
};

const getParticipant = (page, limit) => {
  const data = { params: { page: page, limit: limit } };
  return axios.get("participant", data);
};

export { postAddUser, getParticipant };
