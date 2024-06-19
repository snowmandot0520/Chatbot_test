// Question.tsx
import React from "react";

interface QuestionProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Question: React.FC<QuestionProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border-gray-300 px-3 py-2 rounded-md w-full focus:outline-none focus:border-gray-800 border-2"
    />
  );
};
