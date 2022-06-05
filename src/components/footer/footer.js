import logo from "../../images/logo/roklin-black.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import "./footer.scss";

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <img src={logo} alt="" />
            <div className="logos">
              <FaFacebookF
                onClick={() =>
                  window.open("https://www.facebook.com/Roklin-112912181433350")
                }
              />
              <FaTwitter
                onClick={() => window.open("https://twitter.com/Roklin11")}
              />
              <FaInstagram
                onClick={() =>
                  window.open("https://www.instagram.com/rocklin.official/ ")
                }
              />
              <FaLinkedin
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/82075131/admin/ "
                  )
                }
              />
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 links">
            <ul>
              <h6>Links</h6>
              <Link to="/#slideshow">
                <li> What we make</li>
              </Link>
              <Link to="/#who-are-we">
                <li> Why Roklin</li>
              </Link>
              <Link to="/#about">
                <li> About us</li>
              </Link>
              <Link to="/#form-query-contact">
                <li>Contact us</li>
              </Link>
              <Link to="/#projects">
                <li> Our Promising Quality </li>
              </Link>
            </ul>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <ul>
              <h6>
                <ImLocation2 />
                Address
              </h6>
              <li
                style={{
                  width: "fit-content",
                  fontWeight: 500,
                  marginBottom: 5,
                }}
              >
                Plot No. 52-C , Khalid Commercial Street-5, <br />
                Phase Vll Ext. DHA Karachi.
              </li>
              <li>Tel: 0325-9313740</li>
              <li
                style={{
                  overflowWrap: "break-word",
                }}
              >
                Email: sales@roklin.com.pk
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
