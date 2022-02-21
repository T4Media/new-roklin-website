import "./banner.scss";
const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <h1>Industrial Sewing in San Diego</h1>

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
          Shower Curtains & Custom Covers
        </h3>
        <p>
          We produce vinyl, nylon, and fabric products for the Medical,
          Institutional, and <br /> Promotional markets.
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
