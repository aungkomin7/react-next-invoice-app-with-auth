"use client";
import { destroyProduct, productsApiUrl } from "@/services/product";
import { Edit, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import { useSWRConfig } from "swr";

const InventoryTableRow = ({ product }) => {
  const { mutate } = useSWRConfig();

  const handleDelete = async () => {
    if (!confirm("Are you sure to delete?")) return;

    try {
      const res = await destroyProduct(product.id);
      const result = await res.json();

      if (!res.ok) throw new Error(result.message);

      mutate(productsApiUrl);
      toast.success(result.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
      {/* ID */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {product?.id}
        </div>
      </td>

      {/* Product Name */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
          {product?.product_name}
        </div>
      </td>

      {/* Price */}
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <div className="text-sm text-gray-900 dark:text-gray-100">
          {product?.price}
        </div>
      </td>

      {/* Actions */}
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex justify-end space-x-2">
          {/* View */}
          <Link
            href={`/dashboard/inventory/${product?.id}`}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <Eye size={16} />
          </Link>

          {/* Edit */}
          <Link
            href={`/dashboard/inventory/${product?.id}/edit`}
            className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
          >
            <Edit size={16} />
          </Link>

          {/* Delete */}
          <button
            onClick={handleDelete}
            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default InventoryTableRow;
