import { Message } from "@/types";
import { FC } from "react";
import { ChatInput } from "../molecules/chatinput";
import { ChatLoader } from "../atoms/chatloader";
import { ChatMessage } from "../atoms/chatmessage";
import { ResetChat } from "../atoms/resetchat";

interface Props {
  messages: Message[] | undefined;
  loading: boolean;
  onSend: (message: Message) => void;
  onReset: () => void;
}

export const Chat: FC<Props> = ({ messages, loading, onSend, onReset }) => {
  if (!messages || !Array.isArray(messages)) {
    return null; // or render a loading state or error message
  }

  return (
    <>
      <div className="flex flex-col">
        <ResetChat onReset={onReset} />
      </div>

      <div className="flex flex-col w-full min-h-[600px] rounded-lg px-2 sm:p-4 sm:border border-neutral-300 overflow-y-scroll">
        {messages.map((message, index) => (
          <div key={index} className="my-1 sm:my-1.5">
            <ChatMessage message={message} />
          </div>
        ))}

        {loading && (
          <div className="my-1 sm:my-1.5">
            <ChatLoader />
          </div>
        )}
      </div>

      <div className="w-full">
        <ChatInput onSend={onSend} />
      </div>
    </>
  );
};