import { useEffect, useState } from "react";
import { getParticipant } from "../../../services/ApiService";
import { toast } from "react-toastify";
import UserPagination from "./UserPagination";

const TableUser = (props) => {
  const [participants, setParticipants] = useState({});
  const { currentPage, limit } = props;

  // Fetch participants
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const data = await getParticipant(currentPage || 1, limit);
        if (data) {
          if (data.EC === 0) {
            setParticipants({
              currentPage: currentPage,
              users: data.DT.users || [],
              totalPages: data.DT.totalPages || 0,
            });
          } else {
            toast.warn(data.EM);
          }
        } else {
          toast.error("Có lỗi xảy ra");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchParticipants();
  }, [currentPage]);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {participants.users?.length > 0 ? (
            participants.users.map((participant, index) => (
              <tr key={index}>
                <th scope="row">{participant.id}</th>
                <td>{participant.username}</td>
                <td>{participant.email}</td>
                <td>{participant.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No participants found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <UserPagination currentPage={currentPage} totalPages={participants.totalPages} limit={limit} range={5} />
    </>
  );
};
export default TableUser;
