import "./project-carousel.scss";
import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

class ProjectCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: "",
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    var items = [];
    var level;
    console.log(this.state.active);
    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <Item key={index} id={this.state.items[index]} level={level} />
      );
    }
    return items;
  }

  moveLeft() {
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left",
    });
  }

  moveRight() {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right",
    });
  }

  render() {
    return (
      <div id="carousel" className="noselect">
        <IoMdArrowRoundBack
          className="arrow arrow-left"
          style={{
            fontSize: "40px",
            background: "black",
            color: "white",
            padding: 7,
            borderRadius: "20px",
            zIndex: 1,
          }}
          onClick={this.leftClick}
        />
        <ReactCSSTransitionGroup transitionName={this.state.direction}>
          {this.generateItems()}
        </ReactCSSTransitionGroup>
        <IoMdArrowRoundForward
          onClick={this.rightClick}
          className="arrow arrow-right"
          style={{
            fontSize: "40px",
            background: "black",
            color: "white",
            padding: 7,
            borderRadius: "20px",
            zIndex: 0,
          }}
        />
      </div>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }

  render() {
    const className = "item level" + this.props.level;
    return (
      // <Link to={this.props.id.link} target="_blank">
      <div
        onClick={() => window.open(this.props.id.link, "_blank")}
        className={className}
        style={{
          backgroundImage: `url(${this.props.id.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        {/* {this.props.level === 0 ? ( */}
        <div class="content">
          <div class="text">{this.props.id.name}</div>
        </div>
        {/* ) : (
          ""
        )} */}
      </div>
      // </Link>
    );
  }
}

export default ProjectCarousel;
