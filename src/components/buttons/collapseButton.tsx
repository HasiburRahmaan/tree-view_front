import React from "react";

const CollapseButton = ({ collapse = true, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`ml-auto mx-1 my-1 bg-white text-gray-400 hover:text-gray-900 rounded-lg  p-1 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 ${
        !collapse && "rotate-90"
      }`}
    >
      <svg
        className="w-3 h-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-19.04 0 75.804 75.804"
      >
        <g strokeWidth="2"></g>
        <g strokeLinecap="round" strokeLinejoin="round"></g>
        <g>
          <g data-name="Group 65" transform="translate(-831.568 -384.448)">
            <path
              id="Path_57"
              d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
              fill="#0c2c67"
            ></path>
          </g>
        </g>
      </svg>
    </button>
  );
};

export default CollapseButton;
