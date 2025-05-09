const PaginationBar = ({ total, pageSize, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(total / pageSize);
    return (
      <div className="flex justify-between items-center mt-4">
        <span>共{total}条</span>
        <div className="space-x-2">
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>{"<"}</button>
          {[...Array(totalPages).keys()].map(page => (
            <button
              key={page}
              onClick={() => onPageChange(page + 1)}
              className={`px-2 py-1 ${currentPage === page + 1 ? 'bg-blue-500 text-white' : ''}`}
            >
              {page + 1}
            </button>
          ))}
          <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>{">"}</button>
        </div>
      </div>
    );
  };
  
  export default PaginationBar;
  