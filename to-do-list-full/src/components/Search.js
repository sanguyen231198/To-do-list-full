import React, { useState } from "react";
import { connect } from "react-redux";
import {actSearchNote } from "../actions";

function Search(props) {
  const [keyword, setkeyword] = useState("");

  const handleClear = (e) => {
    e.preventDefault();
    setkeyword(""); 
    props.search("");
  };
  const handleSearch = (e) => {
    e.preventDefault();
     props.search(keyword);
  };

  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={keyword}
          onChange={(e) => {
            setkeyword(e.target.value);
          }}
        />
      </div>

      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      <button className="btn btn-danger" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    search: (keyword) => {
      dispatch(actSearchNote(keyword));
    },
    
  };
};

export default connect(null, mapDispatchToProps)(Search);
