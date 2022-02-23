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
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default Home;
