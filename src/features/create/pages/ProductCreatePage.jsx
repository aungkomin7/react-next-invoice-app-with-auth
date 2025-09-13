import DashboardPageLayout from "@/features/dashboard/pages/DashboardPageLayout";
import React from "react";
import ProductCreateSection from "../components/ProductCreateSection";

const ProductCreatePage = () => {
  return (
    <DashboardPageLayout>
      <ProductCreateSection />
    </DashboardPageLayout>
  );
};

export default ProductCreatePage;
