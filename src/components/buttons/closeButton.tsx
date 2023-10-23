import React from "react";

const CloseButton = ({ onClick = () => {}, className = "" }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`ml-auto mx-1 my-1 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-1 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 ${className}`}
    >
      <svg
        className="w-3 h-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 14 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
        />
      </svg>
    </button>
  );
};

export default CloseButton;
