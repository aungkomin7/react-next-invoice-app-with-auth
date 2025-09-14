"use client";
import { Plus, Search, X } from "lucide-react";
import Link from "next/link";
import useProduct from "../hooks/useProduct";

const InventoryTableControlBar = ({
  handleSearch,
  handleClearSearch,
  searchParams,
  searchRef,
}) => {
  return (
    <div className="w-full flex items-center justify-between mb-6">
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
          size={20}
        />

        <input
          onChange={handleSearch}
          ref={searchRef}
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-xl 
                     border border-gray-300 dark:border-gray-600 
                     bg-white dark:bg-gray-800 
                     text-gray-900 dark:text-gray-100
                     placeholder-gray-400 dark:placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                     transition-all duration-200 shadow-sm"
        />

        {searchParams.get("q") && (
          <X
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 cursor-pointer"
            size={20}
          />
        )}
      </div>

      <Link
        href={"/dashboard/inventory/create"}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white flex items-center gap-1 
                   hover:bg-blue-700 focus:outline-none focus:ring-2 
                   focus:ring-blue-400 transition-all"
      >
        <Plus size={18} /> Create
      </Link>
    </div>
  );
};

export default InventoryTableControlBar;
