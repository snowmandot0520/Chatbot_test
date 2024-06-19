// UserAction.tsx
import React from "react";
import Title from "../atoms/title";
import Button from "../atoms/button";
import { Question } from "../atoms/question"; // Adjust import path as needed

interface UserActionProps {
  //title: string;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const UserAction: React.FC<UserActionProps> = ({
  //title,
  input,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div>
      {/* <div className="text-center">
        {title}
        <Title title={title} textColor="#000000" />
      </div> */}
      <form className="w-full flex gap-2" onSubmit={handleSubmit}>
        <Question
          placeholder="How can I help you?"
          value={input}
          onChange={handleInputChange}
        />
        <Button text="Result" textColor="#ffffff" backgroundColor="#000000" />
      </form>
    </div>
  );
};

export default UserAction;
