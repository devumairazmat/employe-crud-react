import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../store/slice/employeSlice";
// import { nanoid } from "@reduxjs/toolkit";
function Form() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [mail, setMail] = useState();
  function handleSubmit() {
    dispatch(add({ name: name, title: title, mail: mail }));
    console.log("added");
  }
  return (
    <>
      <h1 className="text-center">Employe Form</h1>
      <div className="container">
        <div>
          <div className="form-outline mb-4">
            <input
              type="text"
              id="form4Example1"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="form-label" for="form4Example1">
              Name
            </label>
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="form4Example3"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="form-label" for="form4Example3">
              Title
            </label>
          </div>
          <div className="form-outline mb-4">
            <input
              type="email"
              id="form4Example2"
              className="form-control"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <label className="form-label" for="form4Example2">
              Email address
            </label>
          </div>

          <button
            className="btn btn-primary btn-block mb-4"
            onClick={handleSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
