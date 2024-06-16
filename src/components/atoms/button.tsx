// components/Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  textColor: string;
  backgroundColor: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor,
  backgroundColor,
}) => {
  return (
    <button
      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}>
      {text}
    </button>
  );
};

export default Button;
