import React from "react";
import "./style.scss";

const Panel = (props) => {
  return (
    <div className="row panel">
      <div className="col-xl-4">
        <h1>Our Products</h1>
      </div>
      <div className="col-xl-8">
        <img src={props.image} alt="product" />
      </div>
    </div>
  );
};

export default Panel;
