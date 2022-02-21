import "./nav-header.scss";
import PakFlag from "../../images/flag/pakistan.png";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const NavHeader = () => {
  return (
    <div className="nav-header">
      <div className="container">
        <div className="small-logo">
          <div className="logo">
            <img src={PakFlag} alt="pakistan-flag" />
          </div>
          <div className="text">
            <h6>Made in the Pakistan</h6>
          </div>
        </div>

        <div className="email-and-number">
          <div className="email">
            <HiOutlineMail />
            <h6>sales@garymanufacturing.com</h6>
          </div>
          <div className="number">
            <FaPhoneAlt />
            <h6>8007750804</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
