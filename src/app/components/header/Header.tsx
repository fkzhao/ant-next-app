import React from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import NavigationBar from "@/app/components/header/NavigationBar";
const Header = () => {
  return (
    <div>
      {/* Top header*/}
      {/*<TopHeader />*/}
      {/* Main header (navbar)*/}
      <NavigationBar />
    </div>
  );
};
export default Header;
