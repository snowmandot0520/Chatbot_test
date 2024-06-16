import React from "react";
import Avatar from "../atoms/avatar";

interface ChatActionProps {
  messages: any[];
  userImageUrl: string;
  botImageUrl: string;
}

const ChatAction: React.FC<ChatActionProps> = ({
  messages,
  userImageUrl,
  botImageUrl,
}) => {
  return (
    <div
      className="space-y-4 overflow-y-auto flex-grow mt-5"
      style={{ scrollbarWidth: "thin" }}>
      {messages.map((message) => (
        <div key={message.id} className="flex gap-2 text-slate-600 text-sm">
          {message.role === "user" && (
            <div className="flex flex-row items-center">
              <Avatar imageUrl={userImageUrl} />
              <div className="w-[600px]">{message.content}</div>
            </div>
          )}

          {message.role === "assistant" && (
            <div className="flex flex-row items-center ml-40">
              <div className="w-[600px]">
                <p>{message.content}</p>
              </div>
              <div className="avatar-pentagon"></div>
              <Avatar imageUrl={botImageUrl} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatAction;
