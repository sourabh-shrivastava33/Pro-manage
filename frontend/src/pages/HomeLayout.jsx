import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { HomeLayoutWrapper } from "../assets/styled-components/HomeLayoutWrapper";

const HomeLayout = () => {
  return (
    <HomeLayoutWrapper>
      <Sidebar />
      <Outlet />
    </HomeLayoutWrapper>
  );
};

export default HomeLayout;
