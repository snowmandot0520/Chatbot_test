"use client";

import React from "react";

interface IQuestionOrAnswerProps {
    text: string;
}

const QuestionOrAnswer: React.FC<IQuestionOrAnswerProps> = (props) => {
    return <div className=" text-zinc-600">{props.text}</div>;
};

export default QuestionOrAnswer;