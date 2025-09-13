"use client";
import { storeProduct } from "@/services/product";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { DotSpinner } from "ldrs/react";
import "ldrs/react/DotSpinner.css";

const ProductCreate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await storeProduct({
        product_name: data.product_name,
        price: data.price,
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success(result.message);
      reset();

      if (data.goBackInventory) {
        router.push("/dashboard/inventory");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md bg-white dark:bg-gray-900 space-y-4 "
    >
      {/* <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Create Product
      </h2> */}

      {/* Product Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Product Name
        </label>
        <input
          type="text"
          {...register("product_name", {
            required: "Product name is required",
          })}
          placeholder="Enter product name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.product_name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.product_name.message}
          </p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Price
        </label>
        <input
          type="number"
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Price must be greater than 0" },
          })}
          placeholder="Enter price"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="confirmCheck"
          type="checkbox"
          required
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded 
                   focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                   dark:focus:ring-blue-400"
        />
        <label
          htmlFor="confirmCheck"
          className="text-sm text-gray-700 dark:text-gray-300 select-none cursor-pointer"
        >
          I confirm the information is correct
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="confirmBack"
          type="checkbox"
          {...register("goBackInventory")}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded 
                   focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 
                   dark:focus:ring-blue-400"
        />
        <label
          htmlFor="confirmBack"
          className="text-sm text-gray-700 dark:text-gray-300 select-none cursor-pointer"
        >
          Go back inventory page after creating!
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white  flex justify-center items-center
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400
                   disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <DotSpinner size="24" speed="0.9" color="white" />
        ) : (
          "Create Product"
        )}
      </button>
    </form>
  );
};

export default ProductCreate;
