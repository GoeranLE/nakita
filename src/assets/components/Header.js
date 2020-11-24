import React from 'react';
import '../../App.css'
import logo from '../img/logo.jpg';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="d-flex align-items-center">
        <a className="navbar-brand" href="#">
          <div><img src={logo} alt="" className="logo" />
          </div>
        </a>
        <div>
          
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
           
          </li>
          <li className="nav-item">
            
           
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Enter your Email"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            <i class="far fa-envelope"></i> <span>Mail Me</span>
          </button>
        </form>
      </div>
    </nav>
  );
}