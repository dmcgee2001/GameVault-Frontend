/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Signup } from "./SignupModal";
import { Login } from "./LoginModal";
import { useState } from "react";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
export function Header({ games, handleSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const jwtToken = localStorage.getItem("jwt");
  const handleLogoutClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          GameVault
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            {jwtToken ? (
              <>
                <li className="nav-item">
                  <Link to="/collection" type="button" className="nav-link">
                    My Vault
                  </Link>
                </li>
                <li className="nav-item">
                  <a type="button" className="nav-link" onClick={handleLogoutClick}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <a className="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#loginModal" href="#">
                  Login
                </a>
              </li>
            )}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Games I've Added
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              value={searchQuery}
              onChange={handleInputChange}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-dark" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <Signup />
      <Login />
    </nav>
  );
}
