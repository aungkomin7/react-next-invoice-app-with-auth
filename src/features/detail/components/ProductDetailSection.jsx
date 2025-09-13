"use client";
import BreadCurmb from "@/components/BreadCurmb";
import React from "react";
import ProductItemDetail from "./ProductItemDetail";
import useSWR from "swr";
import { productsApiUrl, productsFetcher } from "@/services/product";
import { useParams } from "next/navigation";
import { Zoomies } from "ldrs/react";
import "ldrs/react/Zoomies.css";

const ProductDetailSection = () => {
  const { id } = useParams();
  const { data, isLoading } = useSWR(
    `${productsApiUrl}/${id}`,
    productsFetcher
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center flex-1 min-h-[60vh]">
        <Zoomies
          size="80"
          stroke="5"
          bgOpacity="0.1"
          speed="1.4"
          color="black"
        />
      </div>
    );
  }

  return (
    <section className="p-5 flex-1 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-[calc(100vh-4rem)]">
      <BreadCurmb
        currentPageName="Product Details"
        links={[
          {
            previousPageName: "Product Inventory",
            pageLink: "/dashboard/inventory",
          },
        ]}
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Product Details
        </h2>
      </div>

      <ProductItemDetail product={data?.data} />
    </section>
  );
};

export default ProductDetailSection;
