import React, { useState, useEffect } from 'react';
import PeriodicTable from '../../components/PeriodicTable/PeriodicTable';
import PeriodicTableGame from '../../components/PeriodicTableGame/PeriodicTableGame';
import { NavLink } from 'react-router-dom';
import './periodicTableOfElements.css';


const PeriodicTableOfElements = () => {
  const [displayTable, setDisplayTable] = useState(false);
  const [displayGame, setDisplayGame] = useState(false);

  const resetDisplay = () => {
    setDisplayTable(false);
    setDisplayGame(false);
    console.log('Resetting');
  };

  const handleOnClick = (e) => {
    switch (e.target.id) {
        case 'periodic-table':
          resetDisplay();
          setDisplayTable(true);
          break;
        case 'game':
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
        <div className='periodic_table-navbar-container'>
            <nav className='periodic_table-nav'>
              <div id="periodic-table" onClick={handleOnClick}>Periodic Table</div>
              <div id="game" onClick={handleOnClick}>Game</div>
            </nav>
        </div>
        <div>  
            {displayTable && (<PeriodicTable />)}
            {displayGame && (<PeriodicTableGame />)}
        </div>
    </div>
  )
}

export default PeriodicTableOfElements