import  { useState }  from 'react';
import  SearchBar  from './components/SearchBar';
import  ResultsList  from './components/ResultsList';
import  Pagination  from './components/Pagination';
import  useDebounce  from './hooks/useDebounce';
import  useFetch  from './hooks/useFetch';

export function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const apiUrl = `https://jsonplaceholder.typicode.com/posts?q=${debouncedSearchTerm}&_page=${page}&_limit=6`;

  const { data: items, isLoading, error, totalPages } = useFetch(apiUrl);

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '0 20px' }}>
      <h2>API ilə İşləyən Axtarış Tətbiqi</h2>

      <SearchBar
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1);
        }}
      />

      {isLoading && (
        <div style={{ textAlign: 'center', padding: '20px', color: '#0066cc' }}>
          <h3>Yüklənir...</h3>
        </div>
      )}

      {!isLoading && error && (
        <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
          <h3>Xəta: {error}</h3>
        </div>
      )}

      {!isLoading && !error && items && items.length === 0 && (
        <div style={{ textAlign: 'center', padding: '20px', color: '#666' }}>
          <h3>Axtarışınıza uyğun heç bir nəticə tapılmadı.</h3>
        </div>
      )}

      {!isLoading && !error && items && items.length > 0 && (
        <>
          <ResultsList items={items} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </>
      )}
    </div>
  );
}

export default App;

