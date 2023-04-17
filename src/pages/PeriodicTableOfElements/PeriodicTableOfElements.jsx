import React, { useState, useEffect } from 'react';
import PeriodicTable from '../../components/PeriodicTable/PeriodicTable';
import { NavLink } from 'react-router-dom';


const PeriodicTableOfElements = () => {
  const [display, setDisplay] = useState({periodicTable: false});

  const handleOnClick = (e) => {
    switch (e.target.value) {
        case 'Periodic Table':
            setDisplay({...display, periodicTable: true});
            break;
        default:
            break;
    }
  };

  return (
    <div>
        <h2>Periodic Table of Elements</h2>
        <div className='periodic_table-navbar'>
            <button value='Periodic Table' onClick={handleOnClick}>Periodic Table</button>
        </div>
        <div>  
            {display.periodicTable && (<PeriodicTable />)};
        </div>
    </div>
  )
}

export default PeriodicTableOfElements