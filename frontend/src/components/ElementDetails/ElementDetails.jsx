import React from 'react';
import './elementDetails.css';

const ElementDetails = ({ elementDetails, closeInfo }) => {
  return (
    <div id="element_card">
      <div id="element-box" className={`${elementDetails.category}`}>
        <div
          onClick={closeInfo}
          className="close-button"
          title="Close Info"
        >
        Close [&times;]
        </div>
        <div className="number">{elementDetails.number}</div>
        <div className="symbol">{elementDetails.symbol}</div>
        <div className="element-name">{elementDetails.name}</div>
      </div>
    <div id="information">
      <div>
        <h1 className="big_title">{elementDetails.name}</h1>
        <span className={`cat_name ${elementDetails.category}`}>{elementDetails.category}</span>
        {elementDetails.appearance && (
          <div className="appearance">
              <strong>Appearance:</strong> {elementDetails.appearance}
          </div>
        )}
        <div className="atom_info">
          <span>Atomic Mass: {elementDetails.atomic_mass} | </span>
          <span>Density: {elementDetails.density}</span>
          {elementDetails.molar_heat && <span> | Molar Heat: {elementDetails.molar_heat}</span>}
          {elementDetails.melt && <span> | Melt: {elementDetails.melt}K</span>}
          {elementDetails.boil && <span> | Boil: {elementDetails.boil}K</span>}
        </div>
        <div>{elementDetails.summary}</div>
        <div className="more_info">
          <a target={elementDetails.source} href={elementDetails.source}>More Info</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ElementDetails