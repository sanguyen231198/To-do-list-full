import { arrLevel } from "./AddItem";
import React, { useState } from "react";
import { connect } from "react-redux";
import { actEditNote } from "../actions";
import "./addItem.css";

function EditItem(props) {
  const { noteData } = props;
  const [content, setcontent] = useState(noteData.content);
  const [level, setlevel] = useState(noteData.level);
  const handleSubmit = (e) => {
    e.preventDefault();
    props.editItem(noteData.id, content, level);
    props.toggle();
  };

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
    
    </form>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    editItem: (id, content, level) => {
      dispatch(actEditNote(id, content, level));
    },
  };
};
export default connect(null, mapDispatchToProps)(EditItem);
