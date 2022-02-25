import "./banner.scss";
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
            width: "50%",
          }}
        >
          Custom Room Darkening Fabrics
        </h3>
        <p>
          We manufacture waterproof, smooth and light blocking drapery
          <br /> that promises coziness and comfort.
        </p>

        <div className="buttons">
          <button className="custom-products">Custom Products</button>
          <button className="request-a-quote">Request a Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
