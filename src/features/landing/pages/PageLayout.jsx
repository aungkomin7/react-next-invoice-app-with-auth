import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = ({ children }) => {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
