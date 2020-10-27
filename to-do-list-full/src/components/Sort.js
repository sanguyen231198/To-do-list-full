import React, { useState } from "react";
import { connect } from "react-redux";
import { actSortNote } from "../actions";
export const arrSort = [
  {
    value: 0,
    label: "Sort by",
  },
  {
    value: 1,
    label: "Name",
  },
 
  {
    value: 2,
    label: "Level",
  },
 
];
function Sort(props) {
  const [sortType, setsortType] = useState(0);
const handleSort =() =>{
  
  props.sortItem(sortType);
}
  return (
    <>
      <b>Sort by: </b>

      <select
        value={sortType}
        onClick = {handleSort}
        onChange={(e) => {
          setsortType(parseInt(e.target.value));
        }}
      >
        {arrSort.map((item) => {
          return (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    sortItem: (sortType) => {
      dispatch(actSortNote(sortType));
    },
   
  };
};
export default connect(null, mapDispatchToProps)(Sort);
