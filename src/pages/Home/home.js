import Navbar from "../../components/navbar/navbar";
import NavHeader from "./../../components/nav-header/nav-header";
import video from "../../videos/machine2.mp4";
import "./home.scss";
import Banner from "./components/Banner/banner";
import React from "react";
import ProjectSection from "./components/project-section/project-section";
import AboutSection from "./components/about-section/about-section";
import Footer from "../../components/footer/footer";
import FooterBottom from "../../components/footer-bottom/footer-bottom";
import file from "../../images/file.JPG";
import { useLocation } from "react-router-dom";
import ProductCarousel from "../../components/ProductsCarousel";
// import "node_modules/video-react/dist/video-react.css"; // import css

var Scroll = require("react-scroll");
var scroller = Scroll.scroller;

const Home = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.slice(1));
    }
  }, [location]);

  return (
    <div className="home">
      <div className="video-banner">
        <video loop autoPlay playsInline muted="false">
          <source src={video} type="video/mp4" />
        </video>
        <NavHeader />
        <Navbar />
        <Banner />
      </div>

      <ProductCarousel />
      {/* <Carousel /> */}

      <div className="who-are-we">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-part">
              <h1 className="heading-1">Who We Are</h1>
              <p className="para-1">
                Roklin - a registered brand of Sierra Textile &amp; Fabrics
                (Pvt) Ltd, was established in 2007 in Pakistan with a vision to
                provide its diverse customer base eco friendly fabrics to
                embellish their windows. Never before a 100% blackout fabric was
                available which blocks day light completely to create an
                environment that radiates a cooling and calming effect for every
                household.
              </p>

              <h1 className="heading-2">Why Roklin?</h1>
              <p className="para-2">
                Roklin is an acclaimed blackout collection that is recognized
                for providing authentic and original fabrics to its clientele.
                It has surpassed expectations by delivering drapery items that
                are safe and premium in quality.
              </p>
              <p className="mt-3">
                Roklin’s 100% blackout fabric is OEKO-TEX Standard 100
                Certified, which means that all raw materials used in the
                manufacture of this fabric has been tested for harmful
                substances and therefore is safe for human health. Roklin is
                also available in fire retardant quality.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img src={file} alt="" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
      <ProjectSection />

      <div className="form-query-contact">
        <h6>Contact Us</h6>
        <h1>Get in Touch</h1>
        <div className="form">
          <div className="name-email">
            <input className="mb-3" name="name" placeholder="Enter your name" />
            <input name="email" placeholder="Enter your address" />
          </div>
          <div className="text-area">
            <textarea name="message" placeholder="Enter your message here .." />
          </div>
        </div>
        <div className="button mt-4">
          <button>Submit</button>
        </div>
      </div>
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Home;
