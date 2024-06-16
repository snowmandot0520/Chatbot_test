"use client";
import Title from "../atoms/title";
import { Avatar, AvatarImage } from "../atoms/avatar";
import Button from "../atoms/button";
import { Input } from "../atoms/question";
import { useChat } from "ai/react";
export interface ChatProps {}

export function Chat(props: ChatProps) {
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
        className="space-y-4 overflow-y-auto flex-grow"
        style={{ scrollbarWidth: "thin" }}>
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-2 text-slate-600 text-sm">
              {message.role === "user" && (
                <Avatar>
                  <AvatarImage src="/user.jpg" />
                </Avatar>
              )}

              {message.role === "assistant" && (
                <div className="mx-10">
                  <Avatar>
                    <AvatarImage src="/bot.jpg" />
                  </Avatar>
                </div>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "User" : "Bot"}
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
      </div>
      <div className="space-x-2"></div>
    </div>
  );
}
