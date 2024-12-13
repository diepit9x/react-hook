import { useState } from "react";
import ModalAddUser from "./ModalAddUser";
import "./ManageUser.scss";
import { FaPlus } from "react-icons/fa";
import { getParticipant } from "../../../services/ApiService";
import { toast } from "react-toastify";

const getAllParticipant = async () => {
  let page = 1;
  let limit = 2;
  try {
    const res = await getParticipant(page, limit);
    if (res && res.data) {
      if (res.data.EC === 0) {
      } else {
        toast.warn(res.data.EM);
      }
    } else {
      handleClose();
      toast.error(res.data.EM || "Có lỗi xảy ra");
    }
  } catch (error) {
    alert(error.message);
  }
};

const ManageUser = (props) => {
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  return (
    <div className="manage-user-container">
      <div className="title">Manage users</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button className="btn btn-primary" onClick={() => setShowModalAddUser(true)}>
            <FaPlus /> Add a new user
          </button>
        </div>
        <div className="table-user-container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {<ModalAddUser show={showModalAddUser} setShowModalAddUser={setShowModalAddUser} />}
    </div>
  );
};
export default ManageUser;
