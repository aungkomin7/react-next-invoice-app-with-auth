import BreadCurmb from "@/components/BreadCurmb";
import React from "react";
import ProductCreate from "./ProductCreate";

const ProductCreateSection = () => {
  return (
    <section className="p-5 flex-1  bg-white dark:bg-gray-900 transition-colors duration-300 min-h-[calc(100vh-4rem)]">
      <BreadCurmb
        currentPageName="Product Create"
        links={[
          {
            previousPageName: "Product Inventory",
            pageLink: "/dashboard/inventory",
          },
        ]}
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Product Create
        </h2>
      </div>

      <ProductCreate />
    </section>
  );
};

export default ProductCreateSection;
