import React from "react";
import "./toggleSwitch.css";
  
const ToggleSwitch = ({ label, electronegative, showElectronegative }) => {
  const openElectronegativity = (event) => {
    showElectronegative(!electronegative);
  };

  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input 
          type="checkbox"
          className="checkbox" 
          name={label} id={label}
          onClick={openElectronegativity} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;