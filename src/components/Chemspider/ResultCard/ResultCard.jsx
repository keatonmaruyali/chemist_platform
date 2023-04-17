import React from 'react';
import './resultCard.css';


const ResultCard = ({ compounds }) => {
  return(
    <>
    <div className='result_card-container'>
        {compounds.map(compound => {
            let baseURL = 'http://www.chemspider.com/Chemical-Structure.'  + compound.record_id + '.html'
            return(
                <div className='result_card-content' >
                    <div key={compound.record_id}>
                        <h4>Compound {compound.record_id}</h4>
                        <h4>{compound.commonName}</h4>
                        <img src={compound.image} /> 
                        <p>Formula: {compound.formula}</p>
                        <p>MW: {compound.molecularWeight}</p>
                        <p># of References: {compound.referenceCount}</p>
                        <a class="actualLink" href={baseURL} target={baseURL}>More Details</a>
                    </div>
                </div>
            )
        })}
    </div>
    </>
) 
}

export default ResultCard