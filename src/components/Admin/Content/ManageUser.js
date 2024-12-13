import { useState, useEffect } from "react";
import ModalAddUser from "./ModalAddUser";
import "./ManageUser.scss";
import { FaPlus } from "react-icons/fa";
import { getParticipant } from "../../../services/ApiService";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import TableUser from "./TableUser";

const ManageUser = () => {
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const { pageNumber } = useParams();
  const limit = 4;

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
          <TableUser currentPage={pageNumber} limit={limit} />
        </div>
      </div>
      <ModalAddUser show={showModalAddUser} setShowModalAddUser={setShowModalAddUser} />
    </div>
  );
};

export default ManageUser;
