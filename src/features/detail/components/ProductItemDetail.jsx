"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const ProductItemDetail = ({ product }) => {
  const { id } = useParams();
  return (
    <div
      className="max-w-md 
                    bg-white dark:bg-gray-900 
                     border-gray-200 dark:border-gray-700 
                    space-y-4"
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        {product?.product_name}
      </h2>

      {/* Info List */}
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p>
          <span className="font-medium">ID:</span> {product?.id}
        </p>
        <p>
          <span className="font-medium">Price:</span> {product?.price}
        </p>
        <p>
          <span className="font-medium">Created At:</span>{" "}
          {new Date(product?.created_at).toLocaleString()}
        </p>
        <p>
          <span className="font-medium">Updated At:</span>{" "}
          {new Date(product?.updated_at).toLocaleString()}
        </p>
      </div>

      {/* Action Button */}
      <Link
        href={`/dashboard/inventory/${id}/edit`}
        className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white 
                         hover:bg-blue-700 focus:outline-none focus:ring-2 
                         focus:ring-blue-400 transition-all"
      >
        Edit Product
      </Link>
    </div>
  );
};

export default ProductItemDetail;
