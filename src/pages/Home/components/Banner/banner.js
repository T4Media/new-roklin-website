import { Link } from "react-router-dom";
import "./banner.scss";
import { Helmet } from "react-helmet";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1>100% Pure Blackout Curtains</h1>

        <h3
          style={{
            borderTop: "1px solid white",
            borderStyle: "dashed",
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "none",
            width: "35%",
          }}
        >
          Custom Room Darkening Fabrics
        </h3>

        {/* <p className="mb-3">
          Our premium 100% room darkening fabric has an incredibly soft hand
          <br />
          feel and provides thermal reduction, noise reduction, is water
          <br />
          repellent and has no foul odor or harmful chemicals.
          <br /> Available also in fire retardant grade.
        </p>
        */}

        <p className="second-text">
          This smooth and soft fabric provides light blocking drapery
          <br /> that promises coziness and comfort.
        </p>

        <div className="buttons">
          <Link to="/request-for-quote">
            <button className="request-a-quote">Request a Quote</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
