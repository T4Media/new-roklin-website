import { Link } from "react-router-dom";
import logo from "../../images/logo/roklin-black.png";
import "./navbar.scss";
import { Link as Scroll } from "react-scroll";
import React from "react";

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-2">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
          </div>
          <div className="col-xl-10 col-lg-10">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <Scroll className="nav-links" to="slideshow">
                <li className="nav-item">What We Make</li>
              </Scroll>
              <Scroll className="nav-links" offset={-250} to="who-are-we">
                <li className="nav-item">Why Roklin</li>
              </Scroll>
              <Scroll className="nav-links" offset={-120} to="about">
                <li className="nav-item">About Us</li>
              </Scroll>
              <Scroll
                className="nav-links"
                offset={-120}
                to="form-query-contact"
              >
                <li className="nav-item">Contact Us</li>
              </Scroll>
              <Scroll className="nav-links" offset={-100} to="projects">
                <li className="nav-item">Our Promising Quality</li>
              </Scroll>
              <li className="nav-links">
                <Link to="/request-for-quote">
                  <button>Request a Quote</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="nav-icon" onClick={handleClick}>
        <h1>Hi</h1>

        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
    </div>
  );
};

export default Navbar;
