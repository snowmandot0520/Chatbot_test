"use client"

import React from "react"
import Avatar from "../atoms/avatar";
import QuestionOrAnswer from "../atoms/questionOrAnswer";

interface IBotResponseProps {
    botText: string;
}
const BotResponse: React.FC<IBotResponseProps> = (props) => {
    return (
        <div className="flex justify-end gap-4 items-start p-4 mb-2 rounded-md">
            <span className="w-[70%] flex justify-end">
                <QuestionOrAnswer
                    text={props.botText}
                />
            </span>
            <span className="w-[5%]">
                <Avatar
                    src="/bot.jpeg"
                    alt="User"
                    width={40}
                    height={40}
                />
            </span>
        </div>
    );
}

export default BotResponse;