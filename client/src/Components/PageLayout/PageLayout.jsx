import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import "./PageLayout.css";
import Footer from "../Footer/Footer";
const PageLayout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
