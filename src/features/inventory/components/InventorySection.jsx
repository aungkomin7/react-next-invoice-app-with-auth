"use client";
import React, { useEffect, useState } from "react";
import InventoryTable from "./InventoryTable";
import useSWR from "swr";
import { productsApiUrl, productsFetcher } from "@/services/product";
import BreadCrumb from "@/components/BreadCurmb";
import InventoryTableControlBar from "./InventoryTableControlBar";
import { Zoomies } from "ldrs/react";
import "ldrs/react/Zoomies.css";
import InventoryTableLoader from "./InventoryTableLoader";
import { useSearchParams } from "next/navigation";
import InventoryPagination from "./InventoryPagination";

const InventorySection = () => {
  const [fetchUrl, setFetchUrl] = useState(`${productsApiUrl}`);
  const { data, isLoading } = useSWR(fetchUrl, productsFetcher);
  const searchParams = useSearchParams();

  useEffect(() => {
    setFetchUrl(`${productsApiUrl}?${searchParams.toString()}`);
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center flex-1 bg-white dark:bg-gray-900">
  //       <Zoomies
  //         size="80"
  //         stroke="5"
  //         bgOpacity="0.1"
  //         speed="1.4"
  //         color="black"
  //       />
  //     </div>

  //   );
  // }

  return (
    <section className="p-3 flex-1 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300  shadow-sm">
      <BreadCrumb currentPageName="Inventory" />
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Product Inventory
        </h2>
      </div>

      <InventoryTableControlBar setFetchUrl={setFetchUrl} />

      {isLoading ? (
        <InventoryTableLoader />
      ) : (
        <InventoryTable products={data?.data} />
      )}
      <InventoryPagination setFetchUrl={setFetchUrl} data={data} />
    </section>
  );
};

export default InventorySection;
