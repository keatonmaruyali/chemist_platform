import React, { useState } from 'react';
import PeriodicTable from '../../components/PeriodicTable/PeriodicTable';
import PeriodicTableGame from '../../components/PeriodicTableGame/PeriodicTableGame';
import './periodicTableOfElements.css';


const PeriodicTableOfElements = () => {
  const [displayTable, setDisplayTable] = useState(true);
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
    <div className='periodic_table-page-container'>
        <h2>Periodic Table of Elements</h2>
        <nav className='periodic_table-nav'>
          <div id="periodic-table" onClick={handleOnClick}>Periodic Table</div>
          <div id="game" onClick={handleOnClick}>Game</div>
        </nav>
        <div className='periodic_table-content'>  
            {displayTable && (<PeriodicTable />)}
            {displayGame && (<PeriodicTableGame />)}
        </div>
    </div>
  )
}

export default PeriodicTableOfElements