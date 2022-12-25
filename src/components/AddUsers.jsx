import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { URL } from "../App";

const AddUsers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();

  const addUser = () => {
    axios.post(URL, {
      name,
      email,
      age,
      phone,
    });
    setName("");
    setEmail("");
    setAge("");
    setPhone("");
    alert("Person successfuly added to database!");
  };

  useEffect(() => {});

  return (
    <div>
      <div className="container-fluid bg-success text-center p-3">
        <h1>Add Users</h1>
      </div>
      <div className="form-group container mt-5 text-primary">
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          type="text"
          name=""
          id=""
          value={name}
        />
        <br />
        <label htmlFor="text">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          type="text"
          name=""
          id=""
          value={email}
        />
        <br />
        <label htmlFor="age">Age</label>
        <input
          onChange={(e) => setAge(e.target.value)}
          className="form-control"
          type="age"
          name=""
          id=""
          value={age}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          type="phone"
          name=""
          id=""
          value={phone}
        />
        <br />
        <Link>
          <button onClick={addUser} className="btn btn-dark">
            Add Person
          </button>
        </Link>
        <Link to="/users-list">
          <button className="btn btn-warning mx-1">View Person List</button>
        </Link>
      </div>
    </div>
  );
};

export default AddUsers;
