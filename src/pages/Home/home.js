import Navbar from "../../components/navbar/navbar";
import NavHeader from "./../../components/nav-header/nav-header";
import ReactPlayer from "react-player";
import video from "../../videos/machine.mp4";
import "./home.scss";
import Banner from "./components/Banner/banner";
import Carousel from "./../../components/carousel/carousel";
import React from "react";
import ProjectSection from "./components/project-section/project-section";
import AboutSection from "./components/about-section/about-section";
import Footer from "../../components/footer/footer";
import FooterBottom from "../../components/footer-bottom/footer-bottom";
import file from "../../images/file.JPG";

const Home = () => {
  return (
    <div className="home">
      {/* <ReactPlayer url={video} muted playing loop /> */}
      <video loop autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <NavHeader />
      <Navbar />
      <Banner />
      <Carousel />

      <div className="who-are-we">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-part">
              <h1 className="heading-1">Who We Are</h1>
              <p className="para-1">
                Roklin was established in 2007 in Pakistan that is geared
                towards supplying its diverse customer base room friendly drapes
                to occupy their windows. They market 100% blackout fabrics that
                radiates a cooling and calming effect in every household.
              </p>

              <h1 className="heading-2">Why Roklin?</h1>
              <p className="para-2">
                Roklin is an acclaimed blackout collection that is recognized
                for providing authentic and original fabrics to its clientele.
                It is a relatively new brand situated in Pakistan, yet it has
                surpassed expectations by delivering drapery items that are safe
                and perfect in quality.
              </p>
              <p className="mt-3">
                Roklin’s premium quality 100% blackout fabric is OEKO-TEX
                Standard 100 Certified, which means that all raw materials used
                in the manufacture of this fabric has been tested for harmful
                substances and therefore is safe for human health. Roklin is
                also available in fire retardant quality.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <img src={file} alt="" />
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
