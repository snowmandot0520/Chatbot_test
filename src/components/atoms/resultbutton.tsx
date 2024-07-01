"use client";

import React from "react";
import { IconArrowUp } from "@tabler/icons-react";

interface IResultButtonProps {
    // buttonName: string;
    // width: number;
    // textColor: string;
    // backgroundColor: string;
    changeMessages: () => void;
    handleSubmit: () => void;
}

const ResultButton: React.FC<IResultButtonProps> = (props) => {
    const handleClick = () => {
        props.changeMessages();
        props.handleSubmit();
    };

    return (
        <button onClick={() => handleClick()}>
            <IconArrowUp className="absolute h-8 w-8 hover:cursor-pointer rounded-full p-1 bg-slate-600 text-black hover:opacity-80" />
        </button>
    );
};

export default ResultButton;