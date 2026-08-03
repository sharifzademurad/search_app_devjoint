export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination" style={{ display: 'flex', gap: '10px', marginTop: '20px', alignItems: 'center' }}>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Əvvəlki
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Növbəti
      </button>
    </div>
  );
};