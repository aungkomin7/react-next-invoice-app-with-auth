"use client";
import React, { useState } from "react";
import { LayoutDashboard, User, LogOut, Menu, X, Box } from "lucide-react";
import { useAccountStore } from "@/stores/useAccountStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { logout } = useAccountStore();
  const router = useRouter();

  const menuItems = [
    { id: 1, name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { id: 2, name: "Inventory", icon: Box, href: "/dashboard/inventory" },
  ];

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } transition-all duration-300 ease-in-out
        bg-gradient-to-b from-blue-500 to-blue-700 dark:from-blue-900 dark:to-blue-950
        text-white flex flex-col relative`}
      >
        {/* Logo + Toggle */}
        <div
          className={`flex items-center p-4 border-b ${
            isOpen ? "justify-between" : "justify-center"
          } border-blue-600 dark:border-blue-800`}
        >
          {isOpen && (
            <h1 className="text-lg font-semibold text-white transition-opacity duration-300">
              Logo
            </h1>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-blue-600/50 dark:hover:bg-blue-700/50 transition-all duration-300"
            aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* User */}
        <div className="p-4 border-b border-blue-600 dark:border-blue-800">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-600 dark:bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
              <User size={24} className="text-white" />
            </div>
            {isOpen && (
              <div>
                <h2 className="font-semibold truncate text-white dark:text-gray-100">
                  John Doe
                </h2>
                <p className="text-blue-200 dark:text-blue-300 text-sm truncate">
                  admin@example.com
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-3 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.href}
                key={item.id}
                className={`group relative flex items-center ${
                  isOpen ? "" : "justify-center"
                } w-full p-3 rounded-lg transition-all duration-200
                text-blue-100 dark:text-blue-200 hover:bg-blue-600 dark:hover:bg-blue-700 hover:text-white`}
              >
                <Icon
                  size={20}
                  className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                />
                {isOpen && <span className="ml-3 truncate">{item.name}</span>}

                {!isOpen && (
                  <span className="absolute left-full ml-3 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-md px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-10 whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="group flex items-center w-full p-3 rounded-lg text-blue-100 dark:text-blue-200 hover:bg-red-600 transition-all duration-200 relative"
        >
          <LogOut
            size={20}
            className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
          />
          {isOpen && (
            <span className="ml-3 text-white dark:text-gray-100">Logout</span>
          )}
          {!isOpen && (
            <span className="absolute left-full ml-3 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-md px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg z-10 whitespace-nowrap">
              Logout
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
