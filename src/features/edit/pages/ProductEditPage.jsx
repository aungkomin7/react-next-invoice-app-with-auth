import DashboardPageLayout from "@/features/dashboard/pages/DashboardPageLayout";
import React from "react";
import ProductEditSection from "../components/ProductEditSection";

const ProductEditPage = () => {
  return (
    <DashboardPageLayout>
      <ProductEditSection />
    </DashboardPageLayout>
  );
};

export default ProductEditPage;
