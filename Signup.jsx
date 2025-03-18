import React from "react";
import { useState } from "react";
import axios from "axios";
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaBeer } from "react-icons/fa";

const Signup = ({ handleLogin }) => {
  const [formData, setformData] = useState({ email: "", password: "" });
  const HandleformData = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://calendra.betacvinfotech.com/public/api/login",
      formData
    );
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
    }
    handleLogin();
  };
  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 mb-3">
            <img src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/auth-cover-login-illustration-light.png" />
          </div>

          <div className="col-sm-4 bg-white login">
            <form
              action="https://calendra.betacvinfotech.com/public/api/login"
              onSubmit={HandleformData}
            >
              <h4 class="mb-1">Welcome to Yannick! 👋🏻</h4>
              <label for="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={formData.email}
                className="form-control"
                id="email"
                required
                onChange={onChange}
                name="email"
                aria-describedby="emailHelp"
              />
              <label for="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                name="password"
                id="password"
                className="form-control"
                onChange={onChange}
              />
              <i className="fas fa-eye-slash" id="pwd"></i>
              <div className="d-flex justify-content-between mt-3">
                <div className="mb-0 d-flex">
                  <input className="form-check" type="checkbox" />
                  <label
                    className="d-inline-block form-check me-2 d-inline"
                    for="remember-me"
                  >
                    remember-me
                  </label>
                </div>

                <a
                  href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/auth-forgot-password-cover.html"
                  className="text-decoration-none"
                >
                  <span className="forgot-pwd">Forgot password </span>
                </a>
              </div>
              <button className="btn btn-primary w-100 mt-4" type="submit">
                Log In
              </button>
              <p className="text-center mt-4">
                <span>New on our platform? </span>
                <a href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/auth-register-cover.html" />
                <span className="create-acnt">Create an account</span>
              </p>
              <div className="margin-top my-1 text-align-center d-flex">
                <hr className="text"></hr>
                <span> or </span>
                <hr className="text1"></hr>
              </div>
              <div className="icons-btn text-center ">
                <PiFacebookLogoDuotone className="icons-sub text-align-center text-primary" />
                <FaTwitter className="twiter-icon" />
                <FaGithub className="github-icon" />
                <FcGoogle className="google-icon" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
