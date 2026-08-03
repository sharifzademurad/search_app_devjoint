import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ResultsList } from './components/ResultsList';
import { Pagination } from './components/Pagination';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const dummyData = [
    { id: 1, title: 'Nümunə Nəticə 1', body: 'Birinci kartın mətni' },
    { id: 2, title: 'Nümunə Nəticə 2', body: 'İkinci kartın mətni' }
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
      <h2>API ilə İşləyən Axtarış Tətbiqi</h2>
      
      <SearchBar 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />

      <ResultsList items={dummyData} />

      <Pagination 
        currentPage={page} 
        totalPages={5} 
        onPageChange={(newPage) => setPage(newPage)} 
      />
    </div>
  );
}

export default App;