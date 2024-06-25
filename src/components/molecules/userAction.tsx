"use client"

import React from "react"
import Title from "../atoms/title"
import ResultButton from "../atoms/resultbutton"
import QuestionInput from "../atoms/questionInput"


interface IUserActionProps {
  changeUserMessage: (userMessage: string) => void;
  changeMessages: () => void;
  handleSubmit: () => void;
}

const UserAction: React.FC<IUserActionProps> = (props) => {
  return (
    <div className="flex">
      {/* <Title
        title="Chatbot"
        textColor="#000000"
        textSize={30}
      /> */}
      <div className="flex flex-row gap-4 w-[800px] justify-center">
        <div className="mt-2">
          <QuestionInput
            width={600}
            changeUserMessage={props.changeUserMessage}
            changeMessages={props.changeMessages}
            handleSubmit={props.handleSubmit}
          />
        </div>

        <div>
          <ResultButton
            // buttonName="Result"
            // width={100}
            // textColor="#ffff"
            // backgroundColor="#374234"
            changeMessages={props.changeMessages}
            handleSubmit={props.handleSubmit}
          />
        </div>

      </div>
    </div>
  );
}

export default UserAction;