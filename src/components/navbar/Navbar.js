import React from "react";
import "./navbar.css";
const NavBar = () => {
  return (
    <>
      {/* <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto"> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-none">
        <div className="container-fluid">
          <a className=" blue_color logo_style " href="#">
            B
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="blue_color">01. </span>
                  <span className="text-light">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="blue_color">02. </span>
                  <span className="text-light">Experience</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="blue_color">03. </span>
                  <span className="text-light">Work</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="blue_color">04. </span>
                  <span className="text-light">Contact</span>
                </a>
              </li>
              <li>
                <button class="blue_color button_border">Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* </div>
        </div>
      </div> */}
    </>
  );
};

export default NavBar;

//  <div className="container-fluid nav_bg">
//               <div className="row">
//                   <div className="col-10 mx-auto">

//                   </div>
//               </div>
//           </div>
