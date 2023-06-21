import React from "react";

const Button = ({ children, className = "", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-3 sm:py-2 sm:px-4 bg-green-500 duration-150 hover:bg-green-400 transition-colors rounded-md my-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
