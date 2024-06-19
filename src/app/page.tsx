import { Chat } from "@/components/organisoms/Chat";

export default function Home() {
  return (
    
    <div className="flex-1 overflow-auto sm:px-10 pb-4 sm:pb-10">
    <div className="max-w-[800px] mx-auto mt-4 sm:mt-12">
      <Chat />
      <div />
    </div>
  </div>
  );
}
