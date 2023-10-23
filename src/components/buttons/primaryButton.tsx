import React from "react";

const PrimaryButton = ({
  btnName = "Save",
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      type="button"
      className={`text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-100 font-medium rounded-md text-sm px-3 py-2 mr-2 mb-2  ${className}`}
      onClick={onClick}
    >
      {btnName}
    </button>
  );
};

export default PrimaryButton;
