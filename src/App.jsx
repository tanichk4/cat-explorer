import { useState } from 'react';
import { useFetchCats } from './hooks/useFetchCats';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import CatList from './components/CatList';
import CatCard from './components/CatCard';

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
    <div className='container'>
      <Header />
      <div className='app'>
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
      </div>
      <a href='https://github.com/tanichk4'>&copy; by tanichk4</a>
    </div>
  );
}

export default App;
