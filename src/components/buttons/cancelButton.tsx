import React from "react";

const CancelButton = ({
  btnName = "Cancel",
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      type="button"
      className={`focus:outline-none text-white bg-red-700 hover:bg-red-800  focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 mr-2 mb-2   ${className}`}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
};

export default CancelButton;
