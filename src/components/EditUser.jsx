import React from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { URL } from "../App";

const EditUser = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(`${URL}/${id}`);
      if (!response.ok) {
        const message = `An error acured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/users-list");
        return;
      }
      setForm(record);
    }
    fetchData();
  }, [params.id, navigate]);

  function updateForm(value) {
    return setForm({ ...form, ...value });
  }

  function onSubmit(e) {
    e.preventDefault();
    const editedData = {
      name: form.name,
      email: form.email,
      age: form.age,
      phone: form.phone,
    };

    fetch(`${URL}/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(editedData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/users-list");
  }
  return (
    <div>
      <div className="container-fluid bg-warning text-center p-3">
        <div className="row ">
          <div className="d-flex align-baseline col-sm-6 justify-content-end">
            <h1 className="">Edit Users</h1>
          </div>
          <div className="d-flex align-baseline col-sm-6 justify-content-end">
            <Link to="/users-list" className="col-sm-6">
              <button className="btn btn-dark">Back</button>
            </Link>
          </div>
        </div>
      </div>

      <form action="" onSubmit={onSubmit} className="container text-primary">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
            className="form-control"
            type="text"
            name=""
            id=""
          />
          <br />
          <label htmlFor="text">Email</label>
          <input
            value={form.email}
            onChange={(e) => updateForm({ email: e.target.value })}
            className="form-control"
            type="text"
            name=""
            id=""
          />
          <br />
          <label htmlFor="age">Age</label>
          <input
            value={form.age}
            onChange={(e) => updateForm({ age: e.target.value })}
            className="form-control"
            type="age"
            name=""
            id=""
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            value={form.phone}
            onChange={(e) => updateForm({ phone: e.target.value })}
            className="form-control"
            type="phone"
            name=""
            id=""
          />
          <br />
          <input type="submit" className="btn btn-dark" name="" id="" />
        </div>
      </form>
    </div>
  );
};

export default EditUser;
