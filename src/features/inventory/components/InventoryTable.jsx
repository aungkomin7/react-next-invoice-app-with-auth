"use client";
import React from "react";
import InventoryTableRow from "./InventoryTableRow";

const InventoryTable = ({ products }) => {
  return (
    <div className="bg-white dark:bg-gray-900 mb-5 transition-colors duration-300">
      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700 dark:text-gray-100 uppercase tracking-wider cursor-pointer">
                #
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100 uppercase tracking-wider cursor-pointer">
                Product Name
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 dark:text-gray-100 uppercase tracking-wider cursor-pointer">
                Price
              </th>
              <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 dark:text-gray-100 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {/* Empty State */}
            {products.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-gray-600 dark:text-gray-400 text-lg py-10 text-center"
                >
                  There are no product lists.
                </td>
              </tr>
            )}

            {/* Rows */}
            {products.map((el, index) => (
              <InventoryTableRow key={el.id} product={el} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
