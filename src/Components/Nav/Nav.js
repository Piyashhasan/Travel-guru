import React from "react";
import logo from "../../Images/Logo.png";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="container-fluid nav-bg Nav">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink exact className="navbar-brand" to="/">
              <img src={logo} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <form className="form-inline mx-auto my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                />
              </form>
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <NavLink activeClassName="menu-active" className="nav-link nav_link" to="/home">
                    Home <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item active">
                  <NavLink activeClassName="menu-active" className="nav-link nav_link" to="/login">
                    LogIn
                  </NavLink>
                </li>
                
                <li className="nav-item active">
                  <NavLink activeClassName="menu-active" className="nav-link" to="/shipment">
                    Book
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
