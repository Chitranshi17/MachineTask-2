import React from "react";

const Pagination = ({
  totalCard,
  perPageData,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];

  const totalPages = Math.ceil(totalCard / perPageData);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="w-full h-[10rem] flex items-center justify-center pagination">
      {pages.map((page, index) => {
        return (
          <div
            className={
              page === currentPage
                ? "active text-2xl font-bold w-[4rem] h-[4rem] rounded-full bg-slate-300 text-white flex items-center justify-center mx-1"
                : "text-2xl font-bold w-[2rem] h-[2rem] rounded-full bg-white flex items-center justify-center mx-1"
            }
            // className="w-[2rem] h-[2rem] rounded-full bg-white flex items-center justify-center mx-1"
          >
            <button
              className={
                page === currentPage
                  ? "active text-sm font-bold"
                  : "text-sm font-bold"
              }
              key={index}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
