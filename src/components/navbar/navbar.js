import logo from "../../images/logo/roklin-black.png";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="col-xl-2 col-lg-2">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div className="col-xl-10 col-lg-10">
            <ul>
              <li>What We Make</li>
              <li>Why Rocklin</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>
                <button>Request a Quote</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
