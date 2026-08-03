import React, { useState } from "react";
import PublicLayout from "./PublicLayout";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    password: "",
    repeatpassword: "",
  });

    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      mobilenumber,
      email,
      password,
      repeatpassword,
    } = formData;

    if (password !== repeatpassword) {
      toast.error("Password and Confirm Password do not Match");
      return;
    }
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          mobilenumber,
          email,
          password,
        }),
      });

      const result = await response.json();

      if (response.status === 201) {
        toast.success(result.message || "You have successfully registered.");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobilenumber: "",
          password: "",
          repeatpassword: "",
        });
        setTimeout(()=>{
                navigate('/Login')
            },2000)
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error connecting to server");
    }
  };

  return (
    <PublicLayout>
      <ToastContainer autoClose={2000} position="top-right" />

      <div className="container py-5">
        <div className="row shadow-lg rounded-4">
          <div className="col-md-6 p-4">
            <h3 className="text-center text-primary mb-4">
              <i className="fas fa-user-plus me-2"></i>User Registration
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  name="firstname"
                  type="text"
                  className="form-control"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                ></input>
              </div>
              <div className="mb-3">
                <input
                  name="lastname"
                  type="text"
                  className="form-control"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                ></input>
              </div>
              <div className="mb-3">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                ></input>
              </div>
              <div className="mb-3">
                <input
                  name="mobilenumber"
                  type="text"
                  className="form-control"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                ></input>
              </div>
              <div className="mb-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                ></input>
              </div>
              <div className="mb-3">
                <input
                  name="repeatpassword"
                  type="password"
                  className="form-control"
                  value={formData.repeatpassword}
                  onChange={handleChange}
                  placeholder="Repeat Password"
                ></input>
              </div>
              <button className="btn btn-primary w-100">
                <i className="fas fa-user-check me-2"></i>Submit
              </button>
            </form>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <img
                src="images/signup.svg"
                alt="signup_image"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              ></img>
              <h5 style={{ marginTop: "-1.5rem" }}>
                Registration is fast, secure and free.
              </h5>
              <p className="text-muted small">
                Join our food family and enjoy delicious food delivered to your
                door.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Register;
