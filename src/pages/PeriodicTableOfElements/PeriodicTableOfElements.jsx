import React, { useState } from 'react';
import PeriodicTable from '../../components/PeriodicTable/PeriodicTable';
import PeriodicTableGame from '../../components/PeriodicTableGame/PeriodicTableGame';
import { AiOutlineTable } from 'react-icons/ai';
import { TbDeviceGamepad } from 'react-icons/tb';
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
        <nav className='periodic__table__page-nav-content'>
          <div id="periodic-table" onClick={handleOnClick}>
            <AiOutlineTable className='periodic__table-icon' />
            Periodic Table
          </div>
          <div id="game" onClick={handleOnClick}>
            <TbDeviceGamepad className='game-icon'/>
            Game
          </div>
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