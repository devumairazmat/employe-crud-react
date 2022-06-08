import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, update } from "../../store/slice/employeSlice";
import { nanoid } from "@reduxjs/toolkit";
function Form() {
  const updateData = useSelector((state) => state.employe.updateData);
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [mail, setMail] = useState();
  const [updatee, setUpdatee] = useState(false);
  useEffect(() => {
    if (updateData.length > 0) {
      handleLoad();
    }
  }, [updateData]);
  const handleLoad = () => {
    setUpdatee(true);
    setName(updateData[0].name);
    setTitle(updateData[0].title);
    setMail(updateData[0].mail);
  };

  const handleUpdate = () => {
    dispatch(
      update({ name: name, title: title, mail: mail, id: updateData[0].id })
    );
    setUpdatee(false);
    setName("");
    setTitle("");
    setMail("");
  };

  function handleSubmit() {
    dispatch(add({ name: name, title: title, mail: mail, id: nanoid() }));
    setName("");
    setTitle("");
    setMail("");
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
            <label className="form-label" htmlFor="form4Example1">
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
            <label className="form-label" htmlFor="form4Example3">
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
            <label className="form-label" htmlFor="form4Example2">
              Email address
            </label>
          </div>
          <button
            className="btn btn-primary btn-block mb-4"
            onClick={updatee ? handleUpdate : handleSubmit}
          >
            {updatee ? "Update" : "Send"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
