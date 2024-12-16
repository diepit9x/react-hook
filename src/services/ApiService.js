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

const putUpdateUser = (id, username, role, userImage) => {
  //submit data
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", userImage);
  return axios.put("participant", data);
};

const delDeleteUser = (id) => {
  const data = new FormData(); // Tạo form-data
  data.append("id", id);

  return axios.delete("participant", {
    data: data, // Truyền form-data vào body
    headers: {
      "Content-Type": "multipart/form-data", // Đặt header cho form-data
    },
  });
};

const getParticipant = (page, limit) => {
  const data = { params: { page: page, limit: limit } };
  return axios.get("participant", data);
};

const postLogin = (email, password) => {
  return axios.post("login", { email, password });
};

const postRegister = (email, username, password) => {
  return axios.post("register", { email, username, password });
};

export { postAddUser, putUpdateUser, getParticipant, delDeleteUser, postLogin, postRegister };
