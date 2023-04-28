import React from "react";
import data from "../../data/_data.json";
import './elementTiles.css';


const ElementTiles = ({ showInfo, num, electronegative}) => {
  const element = data.elements[num];

  const openInfo = (event) => {
    showInfo(num);
  };

  {
    if (electronegative) {
      return (
        <div
          key={`element_en_${element.number}`}
          title={element.name}
          onClick={openInfo}
          className={`element_en element-${num} ${element.category}`}
        >
          <div className="number">{element.number}</div>
          <div className="symbol">{element.symbol}</div>
          <div className="en_value">{element.electronegativity_pauling}</div>
        </div>
      )
    } else {
      return (
        <div
          key={`element_${element.number}`}
          title={element.name}
          onClick={openInfo}
          className={`element element-${num} ${element.category}`}
        >
          <div className="number">{element.number}</div>
          <div className="symbol">{element.symbol}</div>
          <div className="element-name">{element.name}</div>
        </div>
      )
    }
  }
}

export default ElementTiles