// components/Button.tsx
import React from "react";
import { useState } from 'react';


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

  // const [backgroundColor, setBackgroundColor] = useState('lightgray');
  // const [textColor, setTextColor] = useState('black');

  const handleClick = () => {
    // if (backgroundColor === 'lightblue') {
    //   setBackgroundColor('darkgray');
    //   setTextColor('white');
    // } else {
    //   setBackgroundColor('lightblue');
    //   setTextColor('black');
    // }
  };

  return (
    <button

      style={{
        color: textColor,
        backgroundColor: backgroundColor,
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
