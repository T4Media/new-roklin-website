import logo from "../../images/logo/roklin-black.png";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import "./footer.scss";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <img src={logo} alt="" />
            <div className="logos">
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
              <FaLinkedin />
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
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

          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 whatsapp-bar">
            <WhatsAppWidget phoneNumber="03328294104" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
