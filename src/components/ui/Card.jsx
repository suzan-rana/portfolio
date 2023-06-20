import React from "react";

const Card = ({ children, isLoading, className }) => {
  return (
    <article
      className={
        "border sm:w-[50%] mt-8 px-4 py-4 border-gray-200 rounded-md bg-gray-200 transition-colors  hover:border-green-500"
      }
    >
      {children}
    </article>
  );
};

export const CardTitle = ({ title, className }) => {
  return <h1 className="text-lg font-bold">{title}</h1>;
};
export const CardText = ({ text, className }) => {
  return <p className="text-sm py-2 sm:py-3 sm:text-base">{text}</p>;
};

export default Card;
