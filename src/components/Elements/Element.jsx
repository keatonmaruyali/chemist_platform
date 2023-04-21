import React, { Component } from "react";
import { elements } from "../../data/_data";
import './elements.css';

export default class Element extends Component {
  state = {
    hover: false,
  };

  openInfo = (event) => {
    this.props.showInfo(this.props.num);
  };

  onMouseEnter = (event) => {
    this.setState({ hover: true });
  };

  onMouseLeave = (event) => {
    this.setState({ hover: false });
  };

  render() {
    let { num } = this.props;
    let element = elements.elements[num];
    return (
      <div
        title={element.name}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.openInfo}
        className={`element element-${num} ${element.category} ${
          this.state.hover ? "active" : ""
        }`}
      >
        <div className="number">{element.number}</div>
        <div className="symbol">{element.symbol}</div>
        <div className="element-name">{element.name}</div>
        {/* <div className="element-name">This is a message.</div> */}
      </div>
    );
  }
}
