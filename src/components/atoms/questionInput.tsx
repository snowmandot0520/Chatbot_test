"use client";

import React, { ChangeEvent, useState, KeyboardEvent } from "react";

interface IQuestionInputProps {
    width: number;
    changeUserMessage: (messages: string) => void;
    changeMessages: () => void;
    handleSubmit: () => void;
}

const QuestionInput: React.FC<IQuestionInputProps> = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        props.changeUserMessage(e.target.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.handleSubmit();
            setInputValue('');
            props.changeMessages();
        }
    };

    return (
        <input
            type="text"
            placeholder="Enter Message..."
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            style={{ width: `${props.width}px`, padding: '10px', height: '50px' }}
            className="border p-3 overflow-auto rounded-xl justify-center"
        />
    );
};

export default QuestionInput;