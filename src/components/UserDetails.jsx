import React from "react";
import { useLocation, Link } from "react-router-dom";
import avatar from "../assets/images/avatar.png";
import email from "../assets/images/email.png";
import age from "../assets/images/age.png";
import phone from "../assets/images/phone.png";

const UserDetails = () => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  return (
    <div>
      <div className="container-fluid d-flex justify-content-between align-items-baseline bg-info p-4">
        <h1>Details</h1>
        <Link to="/users-list">
          <button className="btn btn-light">Back</button>
        </Link>
      </div>

      <div className="mt-5 container d-flex justify-content-center">
        <div class="col-lg-6 text-center ">
          <div className="container rounded-1 py-3 my-3 bg-danger">
            <img src={avatar} alt="GeeksforGeeks logo" height="200px" />
            <h1 className="text-light">{state.name}</h1>
          </div>

          <div className="container p-3 d-flex bg-dark border-info border-info rounded-4">
            <img
              src={email}
              alt=""
              height="80px"
              className="bg-danger rounded-circle"
            />
            <div className="text-center col-10">
              <h1 className="text-light">Email</h1>
              <h5 className="text-info">{state.email}</h5>
            </div>
          </div>
          <div className="container p-3 d-flex mt-2 bg-dark border-info border-info rounded-4">
            <img
              src={age}
              alt=""
              height="80px"
              className="bg-primary text-success rounded-circle"
            />
            <div className="text-center col-10">
              <h1 className="text-light">Age</h1>
              <h5 className="text-info">{state.age}</h5>
            </div>
          </div>
          <div className="container p-3 d-flex mt-2 bg-dark border-info border-info rounded-4">
            <img
              src={phone}
              alt=""
              height="80px"
              className="bg-light rounded-circle"
            />
            <div className="text-center col-10">
              <h1 className="text-light">Phone</h1>
              <h5 className="text-info">{state.phone}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
