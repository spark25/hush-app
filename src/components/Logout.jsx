import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseinit";

const Logout = () => {
  const signout = () => {
    signOut(auth);
  };
  return (
    <div
      className="rounded-full h-10 w-10 shrink-0 flex items-center justify-center hover:bg-h-light"
      role="button"
      onClick={signout}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="#888"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </div>
  );
};

export default Logout;
