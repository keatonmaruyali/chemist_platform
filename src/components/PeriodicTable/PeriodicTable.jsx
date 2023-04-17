import React, { Component, Fragment, useEffect, useState } from "react";
import { elements } from "../../data/_data";
import Element from "../Elements/Element";
import './periodicTable.css';
import "../Elements/elements.css";


const PeriodicTable = () => {
  const [showElementCard, setShowElementCard] = useState(false);
  const [elementDetails, setElementDetails] = useState({});

  const showInfo = num => {
    setElementDetails(elements[num]);
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
      items.push(<Element showInfo={showInfo} num={i} />)
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

  let {
    name,
    summary,
    symbol,
    category,
    number,
    source,
    appearance,
    atomic_mass,
    molar_heat,
    density,
    melt,
    boil
  } = elementDetails;



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
            <div id="element_card">
              <div id="element-box" className={`${category}`}>
                <div
                  onClick={closeInfo}
                  className="close-button"
                  title="Close Info"
                >
                  Close [&times;]
                </div>
                <div className="number">{number}</div>
                <div className="symbol">{symbol}</div>
                <div className="element-name">{name}</div>
              </div>
              <div id="information">
                <div>
                  <h1 className="big_title">{name}</h1>
                  <span className={`cat_name ${category}`}>{category}</span>
                  {appearance && (
                    <div className="appearance">
                      <strong>Appearance:</strong> {appearance}
                    </div>
                  )}
                  <div className="atom_info">
                    <span>Atomic Mass: {atomic_mass} | </span>
                    <span>Density: {density}</span>
                    {molar_heat && <span> | Molar Heat: {molar_heat}</span>}
                    {melt && <span> | Melt: {melt}K</span>}
                    {boil && <span> | Boil: {boil}K</span>}
                  </div>
                  <div>{summary}</div>
                  <div className="more_info">
                    <a target={source} href={source}>More Info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )}
      </div>
    )
  }

export default PeriodicTable
