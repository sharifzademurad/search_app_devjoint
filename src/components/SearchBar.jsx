const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar" style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Axtarış sözünü daxil edin..."
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
};

export default SearchBar;


