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
import logo from "../../images/logo/roklin-black.png";
import { FaFacebookF, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const Home = () => {
  return (
    <div className="home">
      <div className="video">
        <ReactPlayer url={video} muted playing loop />
      </div>
      <NavHeader />
      <Navbar />
      <Banner />
      <Carousel />
      <ProjectSection />
      <AboutSection />

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <img src={logo} alt="" />
              <div className="logos">
                <FaFacebookF />
                <FaTwitter />
                <FaYoutube />
                <FaLinkedin />
              </div>
            </div>
            <div className="col-xl-3"></div>
            <div className="col-xl-3">
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
            <div className="col-xl-3">
              <ul>
                <h6>Links</h6>
                <li>About Us </li>
                <li>Materials</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="links">
              <ul>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li> Sitemap</li>
              </ul>
            </div>
            <div className="created-by">
              <p>
                © 2022 Gary Manufacturing, All Rights Reserved | Site created by
                Thomas Marketing Services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
