import React from "react";
import "./style.scss";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const Panel = (props) => {
  return (
    <div className="">
      <div className="row panel">
        <div className="col-xl-4 col-lg-4 col-md-5">
          <Slide duration={1200} left>
            <div className="description">
              <h2>Our Products</h2>
              <h3>{props.name}</h3>
              <p>{props.description}</p>

              {props.isButton ? (
                <button
                  className="mt-5 navigate-button"
                  onClick={() => {
                    window.open("https://www.sierratextiles.com.pk", "_blank");
                  }}
                >
                  {props.name} COLLECTION
                </button>
              ) : null}
            </div>
          </Slide>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-7">
          <Zoom duration={1500}>
            <img src={props.image} alt="product" />
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Panel;
