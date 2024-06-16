"use client";
import Title from "../atoms/title";
import Button from "../atoms/button";
import { Input } from "../atoms/question";
import UserAction from "../molecules/userAction";
import { useChat } from "ai/react";
import Avatar from "../atoms/avatar";
export interface ChatProps {}

export function Chat(props: ChatProps) {
  const botImageUrl = "/assets/image/bot.jpeg";

  const userImageUrl = "/assets/image/user.jpeg";

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="flex flex-col w-[840px] h-[700px] border-2 border-blue-600 border-dotted p-4 rounded-xl">
      <div>
        <div className="text-center">
          Simple ChatGpt
          <Title title="Simple ChatGpt" textColor="#ffffff" />
        </div>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            placeholder="How can I help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button text="Result" textColor="#ffffff" backgroundColor="#0070f3" />
        </form>
      </div>
      <div
        className="space-y-4 overflow-y-auto flex-grow mt-5"
        style={{ scrollbarWidth: "thin" }}>
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-2 text-slate-600 text-sm">
              {message.role === "user" && (
                <div className="flex flex-row items-center">
                  <Avatar imageUrl={userImageUrl}></Avatar>
                  <div className="w-[600px]">{message.content}</div>
                  {/* <span className="text-gray-800 text-center">User</span> */}
                </div>
              )}

              {message.role === "assistant" && (
                <div className="flex flex-row items-center ml-40 ">
                  <div className="w-[600px]">
                    <p>{message.content}</p>
                  </div>
                  <Avatar imageUrl={botImageUrl}></Avatar>
                  {/* <span className="text-gray-800">Bot</span> */}
                </div>
              )}

              {/* <p>
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "User" : "Bot"}
                </span>
                <div className="w-[600px]">{message.content}</div>
              </p> */}
            </div>
          );
        })}
      </div>
      <div className="space-x-2"></div>
    </div>
  );
}
