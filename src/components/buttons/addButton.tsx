import React from "react";

const AddButton = ({ onClick = () => {}, className = "" }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${className} ml-auto mx-1 my-1 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-1 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 `}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g strokeWidth="0"></g>
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g>
          <path
            d="M7 12L12 12M12 12L17 12M12 12V7M12 12L12 17"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </g>
      </svg>
    </button>
  );
};

export default AddButton;
