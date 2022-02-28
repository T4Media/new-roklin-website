import { Link } from "react-router-dom";
import logo from "../../images/logo/roklin-black.png";
import "./navbar.scss";
import { Link as Scroll } from "react-scroll";

const Navbar = () => {
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
            <ul>
              <Scroll to="slideshow">
                <li>What We Make</li>
              </Scroll>
              <Scroll offset={-250} to="who-are-we">
                <li>Why Rocklin</li>
              </Scroll>
              <Scroll offset={-120} to="about">
                <li>About Us</li>
              </Scroll>

              <Scroll to="form-query-contact">
                <li>Contact Us</li>
              </Scroll>
              <li>
                <Link to="/request-for-quote">
                  <button>Request a Quote</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
