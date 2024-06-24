"use client";

import React from "react";

interface IResultButtonProps {
    buttonName: string;
    width: number;
    textColor: string;
    backgroundColor: string;
    changeMessages: () => void;
    handleSubmit: () => void;
}

const ResultButton: React.FC<IResultButtonProps> = (props) => {
    const handleClick = () => {
        props.changeMessages();
        props.handleSubmit();
    };

    return (
        <button
            onClick={handleClick}
            style={{
                padding: '10px',
                backgroundColor: props.backgroundColor,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
            }}
        >
            <span style={{ color: props.textColor }}>{props.buttonName}</span>
        </button>
    );
};

export default ResultButton;