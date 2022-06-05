import icon1 from "../../../../images/about-us/2.png";
import icon2 from "../../../../images/about-us/3.png";
import icon3 from "../../../../images/about-us/4.png";
import "./about-section.scss";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <h1>About Us</h1>
            <p>
              Roklin is based in Pakistan and has been operational for 16 years.
              It functions as a quality standard enterprise that promises
              exceptional customer service and product quality, that not only
              meets expectations of its customers but exceeds it by all
              standards.
            </p>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 second-column">
            <div className="appraisal appraisal-1">
              <img src={icon1} alt="icon-1" />
              <h5>16 Years in Business</h5>
            </div>
            <div className="appraisal appraisal-2">
              <img src={icon2} alt="icon-1" />
              <h5>Supply Chain Excellence</h5>
            </div>
            <div className="appraisal appraisal-3">
              <img
                style={{
                  width: "16%",
                  left: "-10px",
                  position: "relative",
                }}
                src={icon3}
                alt="icon-1"
              />
              <h5
                style={{
                  marginLeft: "-5px",
                }}
              >
                Satisfied Customers.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
