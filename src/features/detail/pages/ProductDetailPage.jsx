import DashboardPageLayout from "@/features/dashboard/pages/DashboardPageLayout";
import React from "react";
import ProductDetailSection from "../components/ProductDetailSection";
const ProductDetailPage = () => {
  return (
    <DashboardPageLayout>
      <ProductDetailSection />
    </DashboardPageLayout>
  );
};

export default ProductDetailPage;
