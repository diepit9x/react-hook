import _ from "lodash";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalViewUser = ({ show, setShowModalViewUser, dataViewUser }) => {
  const handleClose = () => {
    setShowModalViewUser(false);
    setEmail("");
    setUsername("");
    setRole("");
    setImage("");
  };

  useEffect(() => {
    if (!_.isEmpty(dataViewUser)) {
      setEmail(dataViewUser.email);
      setUsername(dataViewUser.username);
      setRole(dataViewUser.role);
      setImage(dataViewUser.image ? `data:image/jpeg;base64,${dataViewUser.image}` : "");
    }
  }, [dataViewUser]);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");

  return (
    <>
      <Modal backdrop="static" show={show} onHide={handleClose} className="modal-add-user">
        <Modal.Header closeButton>
          <Modal.Title>View profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card">
            {image && <img className="card-img-top" src={image} alt="Avatar" />}
            <div className="card-body">
              <h5 className="card-title text-center">{username}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <b>Email:</b> {email}
              </li>
              <li className="list-group-item">
                <b>Role:</b> {role}
              </li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalViewUser;
