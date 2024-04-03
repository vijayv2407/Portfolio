import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Service = () => {
  return (
    <div>
      <div className="laptop">
        <section className="service">
          <div className="text-center">
            <h2 className="servicebold">Service</h2>
          </div>
          <div className="container">
            <div className="d-flex justify-content-between px-5 skill">
              <div className="myskills col-lg-6 col">
                <div className="headingforservice ps-5">
                  <span className="text-muted">My Services</span>
                  <h2>Here Are Some of My Skills</h2>
                </div>
                <div className=" d-flex flex-wrap">
                  <div className="rotate">
                    <h2>Service</h2>
                    <div className="line"></div>
                  </div>
                  <div className="row mx-auto px-4" data-aos="fade-up">
                    <div className="col-lg-6 col py-2" data-aos="fade-left">
                      <h6 className="pb-2">1 - FRONT END DEVELOPMENT</h6>
                      <ul className="text-muted">
                        <li>HTML5</li>
                        <li>Cascading Style Sheets (CSS3)</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>Ajax</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col py-2" data-aos="fade-left">
                      <h6 className="pb-2">2 - FRAMEWORKS</h6>
                      <ul className="text-muted">
                        <li>React.js</li>
                        <li>Bootstrap 5</li>
                        <li>Material-UI(MUI)</li>
                        <li>GSAP</li>
                        <li>AOS</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col py-2" data-aos="fade-left">
                      <h6 className="pb-2">3 - OTHERS</h6>
                      <ul className="text-muted">
                        <li>Netlify</li>
                        <li>Render</li>
                        <li>Github</li>
                        <li>Wordpress</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col py-2" data-aos="fade-left">
                      <h6 className="pb-2">4 - DESIGN</h6>
                      <ul className="text-muted">
                        <li>Figma</li>
                        <li>Photoshop</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skilsimage col-lg-6 col m-auto">
                <img
                  src={require("./Image/service.png")}
                  alt=""
                  width="100%"
                  height="100%"
                  className="m-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="service my-5 py-5">
          <div className="text-center">
            <h2 className="servicebold">Education</h2>
          </div>
          <div className="container">
            <div className="d-flex justify-content-between px-5 skill">
              <div className="skilsimage col-lg-6 col m-auto">
                <img
                  src={require("./Image/Certificate.png")}
                  alt=""
                  width="100%"
                  height="100%"
                  className="m-auto"
                />
              </div>
              <div className="myskills col-lg-6 col" data-aos="fade-right">
                <div className="headingforservice ps-5">
                  <span className="text-muted" data-aos="fade-left">
                    My Certificate
                  </span>
                  <p
                    className="text-muted fw-semibold fs-5"
                    data-aos="fade-left"
                  >
                    My education has been a journey of self-discovery and
                    data-aos="fade-left" growth. My educational details are as
                    follows.
                  </p>
                </div>
                <div className=" d-flex flex-wrap">
                  <div className="rotate">
                    <h2>Education</h2>
                    <div className="line"></div>
                  </div>
                  <div className="education row mx-auto px-4">
                    <div className="col-lg-12 col py-2" data-aos="fade-left">
                      <h6 className="pb-2">1 - FRONT END DEVELOPMENT</h6>
                      <p className="text-muted ps-3  text-wrap">
                        {" "}
                        <b>2024</b> | Certified - Web Design & Development | WEB
                        D SCHOOL - Vadapalani.{" "}
                      </p>
                      <p className="text-muted  ps-3" data-aos="fade-left">
                        Certified - got a first prize Website Redesign Contest
                      </p>
                    </div>
                    <div className="col-lg-12 col py-2" data-aos="fade-left">
                      <h6 className="pb-2">2 - UNDER GRADUATE</h6>
                      <p className="text-muted ps-3  text-wrap">
                        {" "}
                        <b>2023</b> | Certified - Bachelor of Commerce (Computer
                        Applications) |{" "}
                        <i className="fw-semibold">UNIVERSITY OF MADRAS</i> |
                        Agurchand Manmull Jain College - Meenambakkam,
                        Chennai-600 061.
                      </p>
                    </div>
                    <div className="col-lg-12 col py-2" data-aos="fade-left">
                      <h6 className="pb-2">3 - HSC</h6>
                      <p className="text-muted ps-3  text-wrap">
                        {" "}
                        <b>2018</b> | Certified - Higher Secondary |{" "}
                        <i className="fw-semibold">STATE BOARD</i> | valluvar
                        Gurukulam Higher Secondary School - Tambaram,
                        Chennai-600045.
                      </p>
                    </div>
                    <div className="col-lg-12 col py-2" data-aos="fade-left">
                      <h6 className="pb-2">4 - SSLC</h6>
                      <p className="text-muted ps-3  text-wrap">
                        {" "}
                        <b>2016</b> | Certified - Secondary School leaving
                        Certificate | <i className="fw-semibold">STATE BOARD</i>{" "}
                        | valluvar Gurukulam Higher Secondary School - Tambaram,
                        Chennai-600045.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footerback">
            <div class="custom-shape-divider-top-1711354577">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
            <div className="container">
              <div className="maindivfooter row mx-auto pt-5">
                <div className="subdivfooter1 col-lg-6" data-aos="fade-up-left">
                  <img
                    src={require("./Image/footerback.png")}
                    alt=""
                    width="auto"
                  />
                </div>
                <div className="subdivfooter2 col-lg-6 col mt-5 py-5">
                  <div className="footerheading" data-aos="fade-left">
                    <h1 className="display-1">Let's Talk</h1>
                  </div>
                  <div className="pt-2" data-aos="fade-down-right">
                    <h2 className="display-6 py-2">Vijay Velusamy</h2>
                    <p className="ps-2">
                      <b>Phone :</b> 9940673040
                    </p>
                    <p className="ps-2">
                      <b> Email :</b> wds.vijay24@gmail.com
                    </p>
                  </div>
                  <div data-aos="fade-right">
                    <ul className="d-flex gap-5 py-1">
                      <li>
                        {" "}
                        <Link
                          class="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link class="nav-link" to="/Service">
                          Service
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link class="nav-link" to="/Work">
                          Work
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link class="nav-link" to="/About">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link class="nav-link" to="/Contact">
                          Contact
                        </Link>
                      </li>
                      <Outlet />
                    </ul>
                  </div>
                  <div className="ps-2" data-aos="fade-right">
                    <div className="icons d-flex gap-3">
                      <div className="linkedin">
                        <a
                          href="https://www.linkedin.com/in/vijayv24/"
                          className="nav-link"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-linkedin btn btn-outline-dark"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                          </svg>
                        </a>
                      </div>
                      <div className="git">
                        <a
                          href="https://github.com/vijayv2407"
                          className="nav-link"
                          target="_blank"
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-github btn btn-outline-dark"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                          </svg>
                        </a>
                      </div>
                      <div className="call">
                        <a
                          href="https://www.naukri.com/mnjuser/homepage"
                          className="nav-link"
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-globe"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights bg-dark  text-white py-1">
            <p className="text-center pt-3">
              © Copyright 2024 All rights reserved | This Design is made with by
              Vijay
            </p>
          </div>
        </footer>
      </div>
      <div className="phone">
        <section className="service">
          <div className="text-center">
            <h2 className="servicebold">Service</h2>
          </div>
          <div className="container">
            <div className="skill">
              <div className="headingforservice ms-5">
                <span className="text-muted">My Services</span>
                <h2>Here Are Some of My Skills</h2>
              </div>
              <div className="mx-3">
                <div className="rotate">
                  <h2>Service</h2>
                  <div className="line"></div>
                </div>
                <div className="row ms-3" data-aos="fade-left">
                  <div className=" col-6 py-2">
                    <h6 className="pb-2">1 - FRONT END DEVELOPMENT</h6>
                    <ul className="text-muted">
                      <li>HTML5</li>
                      <li>Cascading Style Sheets (CSS3)</li>
                      <li>JavaScript</li>
                      <li>JQuery</li>
                      <li>Ajax</li>
                    </ul>
                  </div>
                  <div className=" col-6 py-2" data-aos="fade-left">
                    <h6 className="pb-2">2 - FRAMEWORKS</h6>
                    <ul className="text-muted">
                      <li>React.js</li>
                      <li>Bootstrap 5</li>
                      <li>Material-UI(MUI)</li>
                      <li>GSAP</li>
                      <li>AOS</li>
                    </ul>
                  </div>
                  <div className=" col-6 py-2" data-aos="fade-left">
                    <h6 className="pb-2">3 - OTHERS</h6>
                    <ul className="text-muted">
                      <li>Netlify</li>
                      <li>Render</li>
                      <li>Github</li>
                      <li>Wordpress</li>
                    </ul>
                  </div>
                  <div className="col-6 py-2" data-aos="fade-left">
                    <h6 className="pb-2">4 - DESIGN</h6>
                    <ul className="text-muted">
                      <li>Figma</li>
                      <li>Photoshop</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service py-5">
          <div className="text-center">
            <h2 className="servicebold">Education</h2>
          </div>
          <div className="container">
            <div className="row px-3 skill">
              <div className="myskills  col">
                <div className="headingforservice">
                  <span className="text-muted">My Certificate</span>
                  <p className="text-muted fw-semibold fs-5">
                    My education has been a journey of self-discovery and
                    growth. My educational details are as follows.
                  </p>
                </div>
                <div className=" px-2">
                  <div className="rotate">
                    <h2>Education</h2>
                    <div className="line"></div>
                  </div>
                  <div className="education ms-3" data-aos="fade-left">
                    <div className="col py-2 ">
                      <h6 className="pb-2">1 - FRONT END DEVELOPMENT</h6>
                      <p className="text-muted">
                        {" "}
                        <b>2024</b> | Certified - Web Design & Development | WEB
                        D SCHOOL - Vadapalani.{" "}
                      </p>
                      <p className="text-muted">
                        Certified - got a first prize Website Redesign Contest
                      </p>
                    </div>
                    <div className="col py-2" data-aos="fade-left">
                      <h6 className="pb-2">2 - UNDER GRADUATE</h6>
                      <p className="text-muted">
                        {" "}
                        <b>2023</b> | Certified - Bachelor of Commerce (Computer
                        Applications) |{" "}
                        <i className="fw-semibold">UNIVERSITY OF MADRAS</i> |
                        Agurchand Manmull Jain College - Meenambakkam,
                        Chennai-600 061.
                      </p>
                    </div>
                    <div className="col py-2" data-aos="fade-left">
                      <h6 className="pb-2">3 - HSC</h6>
                      <p className="text-muted">
                        {" "}
                        <b>2018</b> | Certified - Higher Secondary |{" "}
                        <i className="fw-semibold">STATE BOARD</i> | valluvar
                        Gurukulam Higher Secondary School - Tambaram,
                        Chennai-600045.
                      </p>
                    </div>
                    <div className="col py-2" data-aos="fade-left">
                      <h6 className="pb-2">4 - SSLC</h6>
                      <p className="text-muted">
                        {" "}
                        <b>2016</b> | Certified - Secondary School leaving
                        Certificate | <i className="fw-semibold">STATE BOARD</i>{" "}
                        | valluvar Gurukulam Higher Secondary School - Tambaram,
                        Chennai-600045.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footerback">
            <div class="custom-shape-divider-top-1711354577">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                  class="shape-fill"
                ></path>
              </svg>
            </div>
            <div className="container">
              <div className="maindivfooter row mx-auto py-3">
                <div className="subdivfooter1 col" data-aos="fade-up-left">
                  <img
                    src={require("./Image/footerback.png")}
                    alt=""
                    width="auto"
                  />
                </div>
                <div className="subdivfooter2 col" data-aos="fade-up-right">
                  <div className="footerheading">
                    <h1 className="display-1">Let's Talk</h1>
                  </div>
                  <div className="pt-2">
                    <h2 className="display-6 py-2">Vijay Velusamy</h2>
                    <p className="ps-2">
                      <b>Phone :</b> 9940673040
                    </p>
                    <p className="ps-2">
                      <b> Email :</b> wds.vijay24@gmail.com
                    </p>
                  </div>
                  <div>
                    <ul className="d-flex gap-5 py-1">
                      <li>
                        {" "}
                        <Link
                          class="nav-link active"
                          aria-current="page"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link class="nav-link" to="/Service">
                          Service
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link class="nav-link" to="/Work">
                          Work
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link class="nav-link" to="/About">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link class="nav-link" to="/Contact">
                          Contact
                        </Link>
                      </li>
                      <Outlet />
                    </ul>
                  </div>
                  <div className="ps-2">
                    <div className="icons d-flex gap-3">
                      <div className="linkedin">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-linkedin btn btn-outline-dark"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                      </div>
                      <div className="gamil">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-envelope-at-fill btn btn-outline-dark"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                          <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                        </svg>
                      </div>
                      <div className="call">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-telephone-inbound-fill  btn btn-outline-dark "
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights bg-dark  text-white py-1">
            <p className="text-center pt-3">
              © Copyright 2024 All rights reserved | This Design is made with by
              Vijay
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
