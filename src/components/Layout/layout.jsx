// Layout.jsx
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LazyWrapper from "../LazyWrapper/LazyWrapper";
import ScrollToTop from "../STT";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <LazyWrapper>
      <Navbar />
      <ScrollToTop/>
      <main>
        <Outlet />
      </main>
      <Footer />
      </LazyWrapper>
    </>
  );
};

export default Layout;
