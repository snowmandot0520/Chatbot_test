"use client"

import React, { useState } from "react"
import UserQuestion from "../molecules/userQuestion"
import BotResponse from "../molecules/botResponse"


interface IResultProps {
  userText: string;
  botText: string;
}
const ChatResult: React.FC<IResultProps> = (props) => {

  return (
    <div className="w-full">
      {props.userText && <div>
        <UserQuestion
          userText={props.userText}
        />
      </div>}
      {props.botText && <div>
        <BotResponse
          botText={props.botText}
        />
      </div>}
    </div>
  );
}

export default ChatResult;