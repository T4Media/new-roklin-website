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
              It materializes 100% blackout drapery and functions as a quality
              standard enterprise that promises exceptional customer service and
              multi-generational operative support
            </p>
            <button className="custom-products">Custom Products</button>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 second-column">
            <div className="appraisal appraisal-1">
              <img src={icon1} alt="icon-1" />
              <h5>16 Years in Business</h5>
            </div>
            <div className="appraisal appraisal-2">
              <img src={icon2} alt="icon-1" />
              <h5>Manufacturing Excellence</h5>
            </div>
            <div className="appraisal appraisal-3">
              <img src={icon3} alt="icon-1" />
              <h5>Expansive Consistency</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
