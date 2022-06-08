import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove, load } from "../../store/slice/employeSlice";
function Table() {
  const dispatch = useDispatch();
  const employe = useSelector((state) => state.employe.value);
  function handleUpdate(payload) {
    dispatch(load(payload));
  }
  function handleRemove(id) {
    dispatch(remove(id));
  }
  return (
    <>
      <div className="container">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Sr.no</th>
              <th>ID</th>
              <th>Name</th>
              <th>Title</th>
              <th>Email</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employe.map((item, idx) => {
              return (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{item.id}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="fw-bold mb-1">{item.name}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{item.title}</p>
                  </td>

                  <td>{item.mail}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link btn-sm btn-rounded mx-2"
                      onClick={() => handleUpdate(item)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-sm btn-rounded mx-2"
                      onClick={() => handleRemove(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
