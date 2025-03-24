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
  }

  function handleCatClick(cat) {
    setSelectedCat(cat);
  }

  return (
    <div className='app'>
      <div className='search-section'>
        <Header />
        <SearchBar value={catQuery} onChange={handleChangeQuery} />
        {!catQuery && <p>Start typing to search</p>}
        {!error && isLoading && <Loader />}
        {error && !isLoading && <ErrorMessage error={error} />}

        {catQuery.length >= 2 && !isLoading && (
          <CatList catData={cats} onCatClick={handleCatClick} />
        )}
      </div>
      <div className='right'>
        {selectedCat && <CatCard cat={selectedCat} />}
      </div>
    </div>
  );
}

export default App;
