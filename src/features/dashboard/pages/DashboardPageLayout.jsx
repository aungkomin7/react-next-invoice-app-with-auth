"use client";
import React, { useEffect } from "react";
import DashboardSidebar from "../components/DashboardSidebar";
import { useAccountStore } from "@/stores/useAccountStore";
import { useRouter } from "next/navigation";

const DashboardPageLayout = ({ children }) => {
  const token = useAccountStore.getState().token;
  const router = useRouter();
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, []);
  return (
    <main className="flex">
      <DashboardSidebar />
      {children}
    </main>
  );
};

export default DashboardPageLayout;
