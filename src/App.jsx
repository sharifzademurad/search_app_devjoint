import { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { ResultsList } from './components/ResultsList';
import { Pagination } from './components/Pagination';

export function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const totalPages = 5; 

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}&_page=${page}&_limit=6`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Data çəkilərkən xəta baş verdi:', error);
      }
    };

    fetchData();
  }, [searchTerm, page]); 
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

      <ResultsList items={items} />

      <Pagination 
        currentPage={page} 
        totalPages={totalPages} 
        onPageChange={(newPage) => setPage(newPage)} 
      />
    </div>
  );
}

export default App;