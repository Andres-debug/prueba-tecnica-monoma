import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 5; 
  const halfVisiblePages = Math.floor(visiblePages / 2);

  const startPage = Math.max(1, currentPage - halfVisiblePages);
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <div className="mt-4 flex justify-center space-x-2">
      {currentPage > 1 && (
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={() => onPageChange(currentPage - 1)}
        >
          Anterior
        </button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 py-2 rounded-md ${
            currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-blue-200'
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          className="px-4 py-2 rounded-md bg-blue-500 text-white"
          onClick={() => onPageChange(currentPage + 1)}
        >
          Siguiente
        </button>
      )}
    </div>
  );
};

export default Pagination;