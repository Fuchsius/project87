import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  totalResults: number; // Total number of results
  resultsPerPage: number; // Number of results per page
  currentPage: number; // Current active page
  onPageChange: (page: number) => void; // Function to handle page change
}

const Pagination: React.FC<PaginationProps> = ({
  totalResults,
  resultsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  // Generates page numbers with ellipsis when necessary
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Pagination Controls */}
      <div className="flex items-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-14 h-14 flex items-center justify-center bg-white border rounded-full ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <ChevronLeft
            size={20}
            //   className={`my-auto transition-all duration-300`}
          />
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && onPageChange(page)}
            className={`w-10 h-10 text-textcolor1 flex items-center justify-center rounded-full ${
              currentPage === page ? " bg-bggray2" : ""
            }`}
            disabled={typeof page !== "number"}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-14 h-14 flex items-center bg-white justify-center border rounded-full ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          <ChevronRight
            size={20}
            //   className={`my-auto transition-all duration-300`}
          />
        </button>
      </div>

      {/* Showing Results Count */}
      <p className="text-textcolor1 font-light text-lg">
        {`${(currentPage - 1) * resultsPerPage + 1} - ${Math.min(
          currentPage * resultsPerPage,
          totalResults
        )} of ${totalResults} Results`}
      </p>
    </div>
  );
};

export default Pagination;
