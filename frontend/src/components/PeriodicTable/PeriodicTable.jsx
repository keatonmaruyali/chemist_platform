import React, { useEffect, useState } from "react";
import { elements } from "../../data/_data";
import ElementTiles from "../ElementTiles/ElementTiles";
import ElementDetails from "../ElementDetails/ElementDetails";
import './periodicTable.css';
import "../ElementTiles/elementTiles.css";


const PeriodicTable = () => {
  const [showElementCard, setShowElementCard] = useState(false);
  const [elementDetails, setElementDetails] = useState({});

  const alElements = elements.elements;
  const showInfo = num => {
    setElementDetails(alElements[num]);
    setShowElementCard(true);
  }

  const closeInfo = () => {
    setElementDetails({});
    setShowElementCard(false);
  }

  /**
   * Helper method that will generate a number of elements
   * from start index to end index to avoid copy pasting
   * all the hundred elements
   * @param {number} start
   * @param {number} end
   * @return {Array<Object>}
   */
  const populateElements = (start, end) => {
    let items = []
    for (let i = start; i <= end; i++) {
      items.push(<ElementTiles key={`element_${i}`} showInfo={showInfo} num={i} />)
    }
    return items
  }

  const mouseClickHandler = (event) => {
    if (event.target.className === 'bg') {
      closeInfo();
    };
  }


  useEffect(() => {
    document.addEventListener("click", mouseClickHandler);
  })

  return (
      <div className="periodictablewrapper">
        <div id="periodictable">
          {/* Elements 1-4 */}
          {populateElements(1, 4)}
          {/* Populating elements from 5-57 */}
          {populateElements(5, 57)}
          {/* Lanthanoids split 72-89 */}
          {populateElements(72, 89)}
          {/* Actinoids split 104-119*/}
          {populateElements(104, 118)}
          {/* Lanthenoids 58-71*/}
          {populateElements(58, 71)}
          {/* Actionoids 90-103 */}
          {populateElements(90, 103)}
        </div>
       
        {showElementCard && (
          <div className="bg">
           <ElementDetails
             elementDetails={elementDetails}
             closeInfo={closeInfo}/>
          </div>
          )}
      </div>
    )
  }

export default PeriodicTable
