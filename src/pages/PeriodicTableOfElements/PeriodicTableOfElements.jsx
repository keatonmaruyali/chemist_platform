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
    <div className='periodic__table__page-container'>
      <div className='periodic__table__page-nav'>
        {/* <h2>Periodic Table of Elements</h2> */}
        <nav className='periodic__table__page-nav-content'>
          <div id="periodic-table" onClick={handleOnClick}>Periodic Table</div>
          <div id="game" onClick={handleOnClick}>Game</div>
        </nav>
      </div>
      <div className='periodic__table__page-content'>  
          {displayTable && (<PeriodicTable />)}
          {displayGame && (<PeriodicTableGame />)}
      </div>
    </div>
  )
}

export default PeriodicTableOfElements