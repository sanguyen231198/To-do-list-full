import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { actAddNote } from "../actions";
import "./addItem.css";

export const arrLevel = [
  {
    value: 0,
    label: "Small",
  },
  {
    value: 1,
    label: "Medium",
  },
  {
    value: 2,
    label: "High",
  },
];

function AddItem(props) {
  const { showForm } = props;
  const [content, setcontent] = useState("");
  const [level, setlevel] = useState(0);
  const noteInput = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(content, level);
    noteInput.current.value = "";
    noteInput.current.focus();
    setcontent("");
    setlevel(0);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setcontent("");
    setlevel(0);
  };

  if (!showForm) return null;
  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={content}
          onChange={(e) => {
            setcontent(e.target.value);
          }}
          ref={noteInput}
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={level}
          onChange={(e) => {
            setlevel(parseInt(e.target.value));
          }}
        >
          {arrLevel.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      <button className="btn btn-danger" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (content, level) => {
      dispatch(actAddNote(content, level));
    },
  };
};
export default connect(null, mapDispatchToProps)(AddItem);
