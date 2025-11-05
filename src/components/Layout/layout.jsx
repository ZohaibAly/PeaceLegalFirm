// Layout.jsx
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LazyWrapper from "../LazyWrapper/LazyWrapper";
import ScrollToTop from "../STT";
import WhatsAppButton from "../WhatsAppButton";
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
      <WhatsAppButton/>
      </LazyWrapper>
    </>
  );
};

export default Layout;
