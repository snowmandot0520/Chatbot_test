"use client"

import React from "react"
import Avatar from "../atoms/avatar";
import QuestionOrAnswer from "../atoms/questionOrAnswer";

interface IUserQuestionProps {
    userText: string;
}
const UserQuestion: React.FC<IUserQuestionProps> = (props) => {
    return (
        <div className="flex justify-start gap-4 items-start rounded-md p-4 mb-2">
            <span className="w-[5%]">
                <Avatar
                    src="/user.jpeg"
                    alt="User"
                    width={40}
                    height={40}
                />
            </span>
            <span className="w-[70%]">
                <QuestionOrAnswer
                    text={props.userText}
                />
            </span>
        </div>
    );
}

export default UserQuestion;