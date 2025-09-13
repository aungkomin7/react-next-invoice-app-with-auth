import InventoryPage from "@/features/inventory/pages/InventoryPage";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense>
      <InventoryPage />
    </Suspense>
  );
};

export default Page;
