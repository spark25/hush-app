import React from "react";

const Brand = ({large}) => {
  return (
    <div className="brand flex items-center">
      {/* <svg
      className="w-6 h-6 mr-1"
      fill="none"
      stroke="#7000DF"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
      />
    </svg> */}
      <h1 className={`font-display font-semibold ${large? 'text-4xl' : 'text-2xl' } `}>
        Hush<span className="text-h-primary text-4xl">.</span>
      </h1>
    </div>
  );
};

export default Brand;
