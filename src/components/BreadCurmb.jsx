"use client";
import {
  Box,
  ChevronRight,
  ChevronsRight,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const BreadCurmb = ({ currentPageName = "new page", links = [] }) => {
  return (
    <div className="mb-5">
      <ol className="flex items-center  whitespace-nowrap">
        <li className="inline-flex items-center">
          <Link
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
            href="/dashboard"
          >
            <LayoutDashboard size={18} />
            Dashboard
            <ChevronRight size={16} />
          </Link>
        </li>

        <li className="inline-flex items-center">
          {links.map((el, idx) => (
            <Link
              key={"link" + idx}
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
              href={`${el.pageLink}`}
            >
              {el.previousPageName} <ChevronRight size={16} />
            </Link>
          ))}
        </li>

        <li
          className="flex items-center gap-2 text-sm font-semibold text-gray-800 truncate dark:text-neutral-300"
          aria-current="page"
        >
          {currentPageName}
        </li>
      </ol>
    </div>
  );
};

export default BreadCurmb;
