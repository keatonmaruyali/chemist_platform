import React from 'react';
import { BiCheck } from 'react-icons/bi';
import { changeLogDetails } from '../../data/_changelog';
import './home.css';


const Home = () => {
  return (
    <div className='home__container'>
      <div className='home__details'>
        <h1>Chemist Platform Project</h1>
        <div className='introduction__content'>
          <h2>Introduction</h2>
          <span>
            This is a personal project to help develop my Frontend and React 
            skills and knowledge.
          </span>
        </div>
        <div className='features__content'>
          <h2>Features</h2>
          <span>Currently, there are 2 main features:</span>
          <ul>
            <li>Periodic Table</li>
            <li>ChemSpider search</li>
          </ul>
          <span>
            The Periodic Table feature is broken down into two further sections: 
            the periodic table of elements and a quiz game. The periodic table of 
            elements will allow you to interact with it, get more details, and link 
            you to an external website where even more information can be found. 
            Meanwhile, the quiz game is entirely based on the data provided in the 
            element cards, not the external information. The questions are only a 
            small subset of the information, but as the project progresses, 
            more dynamic and complex questions will be available.
          </span>
        </div>
      </div>
      <div className='home__changelog'>
        <h1>Changelog:</h1>
        <div className='changelog__content'>
        {
          changeLogDetails.slice(0).reverse().map(({id, date, changes}) => {
            return (
                <article key={`changelog_id_${id}`} className='changelog__content-details'>
                  <BiCheck className='changelog__content-icon' />
                  <span>{date} - {changes}</span>
                </article>
              )
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Home