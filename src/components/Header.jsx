import React from "react";
import Brand from "./Brand";
import Logout from "./Logout";
import { useContext } from "react";
import { UserContext } from "../context/UserContextComponent";

const Header = () => {
  const { user } = useContext(UserContext)

  const getName = () => user ? user.email.split('@')[0] : ''
  return (
    <div className="bg-h-alt h-16 flex items-center justify-between px-4">
      <Brand />
      <div className="flex items-center capitalize text-sm text-gray-400 gap-1">
        <div>{getName()}</div>
      <Logout />
      </div>
    </div>
  );
};

export default Header;
