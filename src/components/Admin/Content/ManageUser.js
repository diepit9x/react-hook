import { useState } from "react";
import ModalAddUser from "./ModalAddUser";
import "./ManageUser.scss";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import TableUser from "./TableUser";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = () => {
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [refreshTable, setRefreshTable] = useState(false);
  const [dataUpdateUser, setDataUpdateUser] = useState({});
  const [dataViewUser, setDataViewUser] = useState({});
  const [dataDeleteUser, setDataDeleteUser] = useState({});

  const { pageNumber } = useParams();
  const limit = 4;

  const handleClickBtnUpdate = (user) => {
    setDataUpdateUser(user);
    setShowModalUpdateUser(true);
  };

  const handleClickBtnView = (user) => {
    setDataViewUser(user);
    setShowModalViewUser(true);
  };

  const handleClickBtnDelete = (user) => {
    setDataDeleteUser(user);
    setShowModalDeleteUser(true);
  };

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
          <TableUser currentPage={pageNumber} limit={limit} refreshTable={refreshTable} handleClickBtnUpdate={handleClickBtnUpdate} handleClickBtnView={handleClickBtnView} handleClickBtnDelete={handleClickBtnDelete} />
        </div>
      </div>
      {showModalAddUser && <ModalAddUser show={showModalAddUser} setShowModalAddUser={setShowModalAddUser} setRefreshTable={() => setRefreshTable((prev) => !prev)} />}
      {showModalUpdateUser && <ModalUpdateUser show={showModalUpdateUser} setShowModalUpdateUser={setShowModalUpdateUser} setRefreshTable={() => setRefreshTable((prev) => !prev)} dataUpdateUser={dataUpdateUser} />}
      {showModalViewUser && <ModalViewUser show={showModalViewUser} setShowModalViewUser={setShowModalViewUser} dataViewUser={dataViewUser} />}
      {showModalDeleteUser && <ModalDeleteUser show={showModalDeleteUser} setShowModalDeleteUser={setShowModalDeleteUser} dataDeleteUser={dataDeleteUser} setRefreshTable={() => setRefreshTable((prev) => !prev)} />}
    </div>
  );
};

export default ManageUser;
