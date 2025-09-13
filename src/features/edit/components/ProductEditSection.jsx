"use client";
import BreadCurmb from "@/components/BreadCurmb";
import { productsApiUrl, productsFetcher } from "@/services/product";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";
import { Zoomies } from "ldrs/react";
import "ldrs/react/Zoomies.css";
import ProductEdit from "./ProductEdit";

const ProductEditSection = () => {
  const { id } = useParams();
  const { data, isLoading } = useSWR(`${productsApiUrl}/${id}`, productsFetcher);

  if (isLoading) {
    return (
      <section className="p-5 animate-pulse">
        {/* Breadcrumb skeleton */}
        <div className="mb-5">
          <ol className="flex items-center space-x-2">
            <li className="flex items-center gap-2">
              <div className="w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-28 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
              <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </li>
            <li className="w-24 h-4 bg-gray-300 dark:bg-gray-700 rounded"></li>
          </ol>
        </div>

        {/* Page Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="w-40 h-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>

        {/* Form Skeleton */}
        <form className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded-xl space-y-4 transition-colors duration-300">
          <div className="w-32 h-5 bg-gray-300 dark:bg-gray-700 rounded"></div>

          {/* Product Name */}
          <div className="space-y-2">
            <div className="w-28 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="w-16 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-48 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
            <div className="w-60 h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>

          {/* Submit Button */}
          <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </form>
      </section>
    );
  }

  return (
    <section className="p-5 flex-1 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-[calc(100vh-4rem)]">
      <BreadCurmb
        currentPageName="Product Edit"
        links={[
          { previousPageName: "Product Inventory", pageLink: "/dashboard/inventory" },
          { previousPageName: "Product Detail", pageLink: `/dashboard/inventory/${id}` },
        ]}
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Product Edit
        </h2>
      </div>

      <ProductEdit product={data?.data} />
    </section>
  );
};

export default ProductEditSection;
