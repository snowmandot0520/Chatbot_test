import React from "react";

interface TitleProps {
  title: string;
  textColor: string;
}

const Title: React.FC<TitleProps> = ({ title, textColor }) => {
  return (
    <div
      className=" text-2xl text-blue-600"
      style={{
        color: textColor,
      }}>
      {title}
    </div>
  );
};

export default Title;
