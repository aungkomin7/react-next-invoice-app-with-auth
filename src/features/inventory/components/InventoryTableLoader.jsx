import React from "react";

const InventoryTableLoader = () => {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th className="px-6 py-3 text-left text-lg font-semibold text-gray-700 dark:text-gray-100 uppercase tracking-wider">
            #
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-100 uppercase tracking-wider">
            Product Name
          </th>
          <th className="px-6 py-3 text-right  text-sm font-semibold text-gray-700 dark:text-gray-100 uppercase tracking-wider">
            Price
          </th>
          <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700 dark:text-gray-100 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
        {[...Array(5)].map((_, index) => (
          <tr key={index} className="animate-pulse">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="h-4 w-6 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right">
              <div className="h-4 w-16 bg-gray-300 dark:bg-gray-700 rounded ml-auto"></div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <div className="flex justify-end space-x-2">
                <div className="size-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="size-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="size-5 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTableLoader;
