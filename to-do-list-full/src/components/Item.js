import React, { useState } from "react";
import { connect } from "react-redux";
import  { arrLevel } from "./AddItem";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import {  actRemoveNote } from "../actions";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditItem from "./EditItem";

function Item(props) {
    
  const { content } = props.noteData;
  const { id } = props.noteData;
  const { index} = props;
  const { level } = props.noteData;
  const {noteData} = props;
  const [showAlert, setShowAlert] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleDelete = () => {
    setShowAlert(true);
  };

  const handleDeleteItem = () => {
    setShowAlert(false);
    props.deleteItem(id);
  };

  const popup = () => {
    return (
      <SweetAlert
        show={showAlert}
        title="Delete Item"
        text={content}
        showCancelButton
        onOutsideClick={() => {
          setShowAlert(false);
        }}
        onEscapeKey={() => {
          setShowAlert(false);
        }}
        onCancel={() => {
          setShowAlert(false);
        }}
        onConfirm={handleDeleteItem}
      ></SweetAlert>
    );
  };

  const handleEditItem = () => {
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Edit Item</ModalHeader>
          <ModalBody>
            <EditItem noteData = {noteData} toggle = {toggle}></EditItem>

          </ModalBody>
          <ModalFooter>
          
          </ModalFooter>
        </Modal>
      </div>
    );
  };
  return (
    <tr>
      <td className="text-center">{index}</td>
      <td>{content}</td>
      <td className="text-center">
        <span className="label label-danger">
          {arrLevel.filter((item) => item.value === level)[0].label}
        </span>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-warning btn-sm"
          onClick={toggle}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={handleDelete}
        >
          Delete
        </button>
        {popup()}
        {handleEditItem()}

      </td>
    </tr>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => {
      dispatch(actRemoveNote(id));
    },
   
  };
};

export default connect(null, mapDispatchToProps)(Item);
