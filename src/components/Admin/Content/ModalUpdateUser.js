import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/ApiService";
import _ from "lodash";

const ModalUpdateUser = (props) => {
  const { show, setShowModalUpdateUser, setRefreshTable, dataUpdateUser } = props;
  const handleClose = () => {
    setShowModalUpdateUser(false);
    setEmail("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
  };
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdateUser)) {
      setId(dataUpdateUser.id);
      setEmail(dataUpdateUser.email);
      setUsername(dataUpdateUser.username);
      setRole(dataUpdateUser.role);
      setPreviewImage(dataUpdateUser.image ? `data:image/jpeg;base64,${dataUpdateUser.image}` : "");
    }
  }, [dataUpdateUser]);

  const onChangeUsername = (event) => {
    setUsername(event.target.value);
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

  const handleSubmitUpdateUser = async () => {
    //validator
    if (!required(username)) {
      toast.warn("Vui lòng nhập username");
      return;
    }

    try {
      let data = await putUpdateUser(id, username, role, image);
      if (data) {
        if (data.EC === 0) {
          handleClose();
          setRefreshTable();
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
          <Modal.Title>Update user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form autoComplete="off">
            <div className="row">
              <div className="form-group col-md-6">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" value={email} disabled />
              </div>
              <div className="form-group col-md-6">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" value={username} onChange={(event) => onChangeUsername(event)} />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" value="*****" disabled />
              </div>
              <div className="form-group col-md-6">
                <label>Role</label>
                <select id="inputRole" className="form-control" value={role} onChange={(event) => onChangeRole(event)}>
                  <option value="USER">User</option>
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
          <Button variant="primary" onClick={handleSubmitUpdateUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateUser;
