"use client";
import UserAction from "../molecules/userAction";
import ChatAction from "../molecules/chatAction";
import { useChat } from "ai/react";
export interface ChatProps {}

export function Chat(props: ChatProps) {
  const botImageUrl = "/assets/image/bot.jpeg";
  const userImageUrl = "/assets/image/user.jpeg";

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  });

  return (
    <div className="flex flex-col w-[840px] h-[700px] border-2 border-blue-600 border-dotted p-4 rounded-xl">
      <UserAction
        title="Simple ChatGpt"
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <ChatAction
        messages={messages}
        userImageUrl={userImageUrl}
        botImageUrl={botImageUrl}
      />
    </div>
  );
}
