"use client";
import React from "react";

const InventoryPagination = ({handleLimit, data, limitRef, handlePaginate}) => {

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 dark:text-gray-500">
        <p>Total - {data?.meta?.total ?? 0} </p>
        <p>
          Page {data?.meta?.current_page ?? 0} of {data?.meta?.last_page ?? 0}
        </p>

        <div>
          <select
            ref={limitRef}
            onChange={handleLimit}
            className="py-3 px-4 block w-full border-teal-500 rounded-lg text-sm focus:border-teal-500 focus:ring-teal-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600"
          >
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
        </div>
      </div>
      <div
        className="flex items-center justify-end gap-x-2 mt-6"
        aria-label="Pagination"
      >
        {/* Previous Button */}
        <button
          onClick={() => handlePaginate(data?.links?.prev)}
          disabled={!data?.links?.prev}
          type="button"
          className="min-h-9.5 min-w-9.5 py-2 px-3 inline-flex items-center gap-x-1.5 text-sm rounded-lg
          text-gray-700 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 
          dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 
          disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200"
          aria-label="Previous"
        >
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <span>Previous</span>
        </button>

        {/* Next Button */}
        <button
          onClick={() => handlePaginate(data?.links?.next)}
          disabled={!data?.links?.next}
          type="button"
          className="min-h-9.5 min-w-9.5 py-2 px-3 inline-flex items-center gap-x-1.5 text-sm rounded-lg
          text-gray-700 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200
          dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:bg-gray-800 
          disabled:opacity-50 disabled:pointer-events-none transition-colors duration-200"
          aria-label="Next"
        >
          <span className="">Next</span>
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InventoryPagination;
