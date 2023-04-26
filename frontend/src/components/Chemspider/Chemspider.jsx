import React, {useState } from 'react';
import ResultCard from './ResultCard/ResultCard';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './chemspider.css';


const Chemspider = () => {
  const [searchedCompounds, setSearchedCompounds] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function getCompounds() {
    setLoading(true);
    const response = await fetch(
      `/api/search_compound/${encodeURIComponent(searchInput)}`
    );
    const data = await response.json();
    setSearchedCompounds(data[0]);
    setLoading(false);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    getCompounds();
  };

  return (
    <>
        <h2>Search Compounds</h2>
        <form onSubmit={handleSubmit} className='chemspider_search'>
            <input
                type="compound"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            <button type='submit'>Search</button>
        </form>
        <div className='results_container'>
            {loading ? <LoadingSpinner /> : <ResultCard compounds={searchedCompounds} />}
        </div>
    </>
  )
}

export default Chemspider
