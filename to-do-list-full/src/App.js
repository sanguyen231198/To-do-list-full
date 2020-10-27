import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import AddItem from "./components/AddItem";
// import Item from "./components/Item";
import ListItem from "./components/ListItem";
import Search from "./components/Search";
import Sort from "./components/Sort";

function App(props) {
  const [showForm, setshowForm] = useState(false);
// const items = props.note.map((item) =>{return <Item key = {item.id} noteData = {item} showForm = {showForm}></Item> })

   console.log("note",props.note);
  const clickForm = () => {
    setshowForm(!showForm);
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>
          Project 01 - ToDo List <small>ReactJS</small>
        </h1>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Search ></Search>
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Sort></Sort>
        </div>
        <div>
          <div className="formAddItem">
            <button
              className="btn btn-info btn-block marginB10"
              onClick={clickForm}
            >
             {showForm?"Close Item" :"Add Item"}
            </button>
            <div className="row marginB10">
              <div className="col-md-offset-0 col-md-12">
                <AddItem showForm={showForm}></AddItem>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ListItem ></ListItem>
      

     
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("sat",state.note)
  return {
    note: state.note,
   
  };
};

export default connect(mapStateToProps,null)(App);
