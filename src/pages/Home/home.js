import Navbar from "../../components/navbar/navbar";
import NavHeader from "./../../components/nav-header/nav-header";
import ReactPlayer from "react-player";
import video from "../../videos/machine.mp4";
import "./home.scss";
import Banner from "./components/Banner/banner";
import Carousel from "./../../components/carousel/carousel";
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
    </div>
  );
};

export default Home;
