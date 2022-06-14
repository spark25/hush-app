import React from "react";
import Brand from "./Brand";
import Logout from "./Logout";

const Header = () => {
  return (
    <div className="bg-h-alt h-16 flex items-center justify-between px-4">
      <Brand />
      <Logout />
    </div>
  );
};

export default Header;
