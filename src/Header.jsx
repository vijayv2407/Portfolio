import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="pt-3">
        <nav class="navbar">
          <div class="container-fluid">
            <div className="logo">
              <Link class="nav-link active" aria-current="page" to="/">
                <img
                  src={require("./Image/vlogo.png")}
                  alt=""
                  loading="lazy"
                  data-aos="fade-left"
                />
              </Link>
            </div>

            <button
              class="navbar-toggler border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
              data-aos="fade-right"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end m-3"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div class="offcanvas-header">
                <button
                  type="button"
                  class="btn-close btn-close-dark"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body p-5">
                <ul class="navbar-nav justify-content-end flex-grow-1 gap-3 pe-3">
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="./About">
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="./Service">
                      Service
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="./Work">
                      Work
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="./Contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="text-center mt-4">
                  <h5 className="display-6 fw-normal">Works</h5>
                </div>
                <div>
                  <Link class="nav-link" to="./Work">
                    <div className="row gap-3">
                      <div className="border">
                        <img src={require("./Image/Onlinechat.png")} loading="lazy"  alt="" width='100%' />
                      </div>
                      <div className="border">
                        <img src={require("./Image/cartimg.png")}  loading="lazy" alt="" width='100%' />
                      </div>
                      <div className="border">
                        <img src={require("./Image/ecommerce.png")} loading="lazy"  alt="" width='100%' />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
