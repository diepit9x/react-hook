import { useEffect, useState } from "react";
import { getParticipant } from "../../../services/ApiService";
import { toast } from "react-toastify";
import UserPagination from "./UserPagination";

const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const { currentPage, limit, refreshTable, handleClickBtnUpdate, handleClickBtnView, handleClickBtnDelete } = props;
  const range = 5;

  const fetchUser = async () => {
    try {
      const data = await getParticipant(currentPage || 1, limit);
      if (data && data.EC === 0) {
        setListUsers(data.DT.users || []);
        setTotalPages(data.DT.totalPages || 0);
      } else {
        toast.error(data.EM);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  // Fetch participants
  useEffect(() => {
    fetchUser();
  }, [refreshTable, currentPage]);
  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.length > 0 ? (
            listUsers.map((user, index) => (
              <tr key={index}>
                <th scope="row">{user.id}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="btn btn-sm btn-info" onClick={() => handleClickBtnView(user)}>
                    View
                  </button>
                  <button className="btn btn-sm btn-warning mx-2" onClick={() => handleClickBtnUpdate(user)}>
                    Update
                  </button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleClickBtnDelete(user)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No user found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <UserPagination currentPage={currentPage} totalPages={totalPages} limit={limit} range={range} />
    </>
  );
};
export default TableUser;
