import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Dashboard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal backdrop="static" size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" className="form-control" placeholder="Password" />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <label for="inputCity">Username</label>
                <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="form-group col-md-6">
                <label for="inputRole">Role</label>
                <select id="inputRole" className="form-control">
                  <option value="USER" selected>
                    User
                  </option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label for="inputFile">Image</label>
                <input type="file" className="form-control" />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Dashboard;
