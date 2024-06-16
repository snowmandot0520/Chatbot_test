import React from "react";

interface TitleProps {
  title: string;
  textColor: string;
}

const Title: React.FC<TitleProps> = ({ title, textColor }) => {
  return (
    <h1
      style={{
        color: textColor,
      }}>
      {title}
    </h1>
  );
};

export default Title;
