import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: any;
  type?: "button" | "submit" | "reset" | undefined;
  tag?: any;
  to?: string;
  className?: string;
}

const CommonButton: React.FC<ButtonProps> = (props) => {
  const { text, onClick, type, tag, to, className } = props;
  return (
    <>
      <button
        type={type || "button"}
        className={`mt-4 py-3 bg-brand-primary-blue hover:bg-brand-hover-blue text-brand-extra-background focus:ring-1 ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default CommonButton;
