import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { postAddUser } from "../../../services/ApiService";

const ModalAddUser = ({ show, setShowModalAddUser }) => {
  const handleClose = () => {
    setShowModalAddUser(false);
    setEmail("");
    setUsername("");
    setPassword("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
  };

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeRole = (event) => {
    setRole(event.target.value);
  };
  const onChangeImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };

  const required = (value) => {
    if (value.toString().trim().length) {
      return true;
    }
  };

  const handleSubmitAddUser = async () => {
    //validator
    if (!required(email)) {
      toast.warn("Vui lòng nhập email");
      return;
    }
    if (!required(username)) {
      toast.warn("Vui lòng nhập username");
      return;
    }
    if (!required(password)) {
      toast.warn("Vui lòng nhập password");
      return;
    }

    try {
      let data = await postAddUser(email, username, password, role, image);
      if (data) {
        if (data.EC === 0) {
          handleClose();
          toast.success(data.EM);
        } else {
          toast.warn(data.EM);
        }
      } else {
        handleClose();
        toast.error(data.EM || "Có lỗi xảy ra");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Modal backdrop="static" size="xl" show={show} onHide={handleClose} className="modal-add-user">
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form autoComplete="off">
            <div className="row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(event) => onChangeEmail(event)} />
              </div>
              <div className="form-group col-md-6">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" value={username} onChange={(event) => onChangeUsername(event)} />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" value={password} onChange={(event) => onChangePassword(event)} />
              </div>
              <div className="form-group col-md-6">
                <label>Role</label>
                <select id="inputRole" className="form-control" onChange={(event) => onChangeRole(event)}>
                  <option value="USER" defaultValue>
                    User
                  </option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label className="label-upload" htmlFor="labelUpload">
                  Upload file image
                </label>
                <input type="file" id="labelUpload" hidden onChange={(event) => onChangeImage(event)} />
              </div>
              <div className="form-group col-md-12 img-preview">
                <span></span>
                {!previewImage ? (
                  <span>Preview image</span>
                ) : (
                  <>
                    <img src={previewImage}></img>
                  </>
                )}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitAddUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalAddUser;
