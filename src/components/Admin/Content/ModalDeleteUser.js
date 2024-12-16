import _ from "lodash";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { delDeleteUser } from "../../../services/ApiService";

const ModalDeleteUser = (props) => {
  const { show, setShowModalDeleteUser, dataDeleteUser, setRefreshTable } = props;

  const handleSubmitDeleteUser = async () => {
    try {
      let data = await delDeleteUser(dataDeleteUser.id);
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

  const handleClose = () => setShowModalDeleteUser(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Delete user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this user: <b>{dataDeleteUser.username}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSubmitDeleteUser}>
            Accept
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalDeleteUser;
