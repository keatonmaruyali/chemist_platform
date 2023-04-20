import React, { useState, useEffect } from 'react';
import PeriodicTable from '../../components/PeriodicTable/PeriodicTable';
import PeriodicTableGame from '../../components/PeriodicTableGame/PeriodicTableGame';
import { NavLink } from 'react-router-dom';


const PeriodicTableOfElements = () => {
  const [displayTable, setDisplayTable] = useState(false);
  const [displayGame, setDisplayGame] = useState(false);

  const resetDisplay = () => {
    setDisplayTable(false);
    setDisplayGame(false);
    console.log('Resetting');
  };

  const handleOnClick = (e) => {
    switch (e.target.value) {
        case 'Periodic Table':
          resetDisplay();
          setDisplayTable(true);
          break;
        case 'Game':
          resetDisplay();
          setDisplayGame(true);
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
            <button value='Game' onClick={handleOnClick}>Game</button>
        </div>
        <div>  
            {displayTable && (<PeriodicTable />)}
            {displayGame && (<PeriodicTableGame />)}
        </div>
    </div>
  )
}

export default PeriodicTableOfElements