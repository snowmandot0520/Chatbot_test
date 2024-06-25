"use client";

import React, { useState, useRef, useEffect } from "react";
import UserAction from "@/components/molecules/userAction";
import ChatResult from "@/components/organisoms/chatResult";
import TItle from "@/components/atoms/title";

interface IMessage {
    user: string;
    bot: string;
}

const Chatting: React.FC = () => {
    const [userMessage, setUserMessage] = useState<string>('');
    const [messages, setMessages] = useState<IMessage[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        scrollToBottom(); // Scroll to bottom when messages change
    }, [messages]);

    const changeUserMessage = (userMessage: string) => {
        setUserMessage(userMessage);
    };

    const changeMessages = () => {
        setMessages([...messages, { user: userMessage, bot: '' }]);
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/openai', {
                method: 'POST',
                body: JSON.stringify({ messages: messages }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const botMessage = data.result;
            console.log(botMessage)

            setMessages([...messages, { user: userMessage, bot: botMessage.content }]);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return (
        <div className="flex flex-col max-w-full max-h-screen items-center p-4">
            <TItle
                title="Chatbot"
                textColor="#000000"
                textSize={30}

            />
            <div className="w-1/2 h-[600px] bg-slate-100 overflow-y-auto rounded-xl">
                {messages.map((message: IMessage, index: number) => (
                    <ChatResult
                        key={index}
                        userText={message.user}
                        botText={message.bot}
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>
            <UserAction
                changeUserMessage={changeUserMessage}
                changeMessages={changeMessages}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default Chatting;