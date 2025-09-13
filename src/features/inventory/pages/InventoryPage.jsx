"use client";
import DashboardPageLayout from "@/features/dashboard/pages/DashboardPageLayout";
import React from "react";
import InventorySection from "../components/InventorySection";

const InventoryPage = () => {
  return (
    <DashboardPageLayout>
      <InventorySection />
    </DashboardPageLayout>
  );
};

export default InventoryPage;
