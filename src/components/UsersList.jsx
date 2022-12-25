import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { URL } from "../App";


function UsersList() {
  const [userData, setUserData] = useState([]);

  const deleteUser = (id) => {
    axios.delete(`${URL}/${id}`);
    // // setUserData(userData.filter((user) => user.id !== id));
  };

  useEffect(() => {
    axios
      .get(URL)

      .then((res) => setUserData(res.data));
    try {
    } catch (error) {
      alert(error);
    }
  }, [userData]);

  return (
    <div>
      <div className="container-lg-fluid bg-dark text-white p-3 md-3 d-flex justify-content-between align-items-baseline">
        <h1>Users List</h1>
        <Link to="/add-users">
          <h2 className="btn btn-info">Add Users</h2>
        </Link>
      </div>
      <div className="table-responsive-lg">
        <table className="table table-hover">
          <thead className="bg-secondary text-white">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((usr) => {
              return (
                <tr key={usr._id}>
                  <td >
                    <Link
                      className="text-decoration-none text-black"
                      to="/user-details"
                      state={usr}
                    >
                      {usr.name}
                    </Link>
                  </td>
                  <td>{usr.email}</td>
                  <td>{usr.age}</td>
                  <td>{usr.phone}</td>
                  <td>
                    <Link state={usr} to={`/edit-user/${usr._id}`}>
                      <button className="btn btn-primary">edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteUser(usr._id)}
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
    </div>
  );
}

export default UsersList;
