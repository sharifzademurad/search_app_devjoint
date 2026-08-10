const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination" style={{ display: 'flex', gap: '8px', marginTop: '24px', justifyContent: 'center', alignItems: 'center' }}>
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        style={{ padding: '8px 12px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
      >
        Əvvəlki
      </button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageChange(pageNum)}
          style={{
            padding: '8px 12px',
            backgroundColor: currentPage === pageNum ? '#183048' : '#eee',
            color: currentPage === pageNum ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: currentPage === pageNum ? 'bold' : 'normal',
          }}
        >
          {pageNum}
        </button>
      ))}

      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
        style={{ padding: '8px 12px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
      >
        Növbəti
      </button>
    </div>
  );
};

export default Pagination;
