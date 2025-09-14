"use client";
import InventoryTable from "./InventoryTable";
import BreadCrumb from "@/components/BreadCurmb";
import InventoryTableControlBar from "./InventoryTableControlBar";
import "ldrs/react/Zoomies.css";
import InventoryTableLoader from "./InventoryTableLoader";
import InventoryPagination from "./InventoryPagination";
import useProduct from "../hooks/useProduct";

const InventorySection = () => {
  const {
    products,
    productLoading,
    searchParams,
    searchRef,
    handleClearSearch,
    handleSearch,
    handleLimit,
    limitRef,
    handlePaginate,
  } = useProduct();

  return (
    <section className="p-3 flex-1 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300  shadow-sm">
      <BreadCrumb currentPageName="Inventory" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Product Inventory
        </h2>
      </div>

      <InventoryTableControlBar
        handleSearch={handleSearch}
        handleClearSearch={handleClearSearch}
        searchParams={searchParams}
        searchRef={searchRef}
      />

      {productLoading ? (
        <InventoryTableLoader />
      ) : (
        <InventoryTable products={products?.data} />
      )}
      <InventoryPagination
        handleLimit={handleLimit}
        data={products}
        limitRef={limitRef}
        handlePaginate={handlePaginate}
      />
    </section>
  );
};

export default InventorySection;
