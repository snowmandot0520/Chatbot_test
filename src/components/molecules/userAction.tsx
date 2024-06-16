import React from "react";
import Title from "../atoms/title";
import { Input } from "../atoms/question";
import Button from "../atoms/button";

interface UserActionProps {
  title: string;
  titleColor: string;
  buttonText: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
}

const UserAction: React.FC<UserActionProps> = ({
  title,
  titleColor,
  buttonText,
  buttonTextColor,
  buttonBackgroundColor,
}) => {
  return (
    <div className="flex flex-col space-y-4 p-4 border border-gray-300 rounded">
      <Title title={title} textColor={titleColor} />
      <Input placeholder="Enter your question" />
      <Button
        text={buttonText}
        textColor={buttonTextColor}
        backgroundColor={buttonBackgroundColor}
      />
    </div>
  );
};

export default UserAction;
