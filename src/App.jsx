import { useState } from 'react';
import { useFetchCats } from './hooks/useFetchCats';

import SearchBar from './components/SearchBar';
import CatList from './components/CatList';
import CatCard from './components/CatCard';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Header from './components/Header';

function App() {
  const [catQuery, setCatQuery] = useState('');
  const { cats, isLoading, error } = useFetchCats(catQuery);
  const [selectedCat, setSelectedCat] = useState(null);

  function handleChangeQuery(e) {
    setCatQuery(e);
    setSelectedCat(null);
  }

  function handleCatClick(cat) {
    setSelectedCat(cat);
  }

  return (
    <div className='app'>
      <Header />
      <div className='search-section'>
        <SearchBar value={catQuery} onChange={handleChangeQuery} />
        {!catQuery && <p>Start typing to search</p>}
        {!error && isLoading && <Loader />}
        {error && !isLoading && <ErrorMessage error={error} />}

        {catQuery.length >= 2 && !isLoading && (
          <CatList catData={cats} onCatClick={handleCatClick} />
        )}
      </div>
      <div className='result-section'>
        {selectedCat && <CatCard cat={selectedCat} />}
      </div>
      <a href='https://github.com/tanichk4'>by tanichk4 &copy;</a>
    </div>
  );
}

export default App;
