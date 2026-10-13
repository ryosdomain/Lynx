import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";
const mainlayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen bg-gray-300">
      <header>
        <Header />
      </header>
      <main className="h-full">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default mainlayout;
