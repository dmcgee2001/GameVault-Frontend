/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useState, useEffect } from "react";

export function Login() {
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const signupLink = document.getElementById("signupLink");
    if (signupLink) {
      signupLink.addEventListener("mouseover", () => {
        signupLink.style.cursor = "pointer";
        signupLink.style.textDecoration = "underline";
        signupLink.style.color = "blue";
      });
      signupLink.addEventListener("mouseout", () => {
        signupLink.style.cursor = "default";
        signupLink.style.textDecoration = "none";
        signupLink.style.color = "inherit";
      });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="modal" id="loginModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input name="email" type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input name="password" type="password" className="form-control" required />
              </div>
              <button type="submit" data-bs-dismiss="modal" className="btn btn-danger">
                Login
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <p>
              Don't have an account?{" "}
              <a
                id="signupLink"
                data-bs-target="#signupModal"
                data-bs-toggle="modal"
                className="text-primary text-decoration-none"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
