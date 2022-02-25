import logo from "../../images/logo/roklin-black.png";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <img src={logo} alt="" />
            <div className="logos">
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
              <FaLinkedin />
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12"></div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <ul>
              <h6>
                <ImLocation2 />
                Address
              </h6>
              <li
                style={{
                  fontWeight: 500,
                  marginBottom: 5,
                }}
              >
                2626 Southport Way, Suite E <br />
                National City, CA 91950
              </li>
              <li>Tel: 800-775-0804</li>
              <li>Email: sales@garymanufacturing.com</li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <ul className="links">
              <h6>Links</h6>
              <li>About Us </li>
              <li>Materials</li>
              <li>Case Studies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
