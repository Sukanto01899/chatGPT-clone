import { Bot } from "lucide-react";
import Markdown from "react-markdown";
import { MessageProps } from "../../App";

const Message = ({ role, content }: MessageProps) => {
  return (
    <div
      className={`relative  my-4 flex  ${
        role === "bot" ? "justify-start" : "justify-end"
      }`}
    >
      <div className="">
        <div className=" p-2 rounded-3xl text-white flex items-start gap-4">
          {role === "bot" && (
            <div>
              <Bot className="py-1 border rounded-full h-8 w-8" />
            </div>
          )}
          <span
            className={`${role === "user" && "bg-[#2f2f2f] p-2 rounded-2xl"}`}
          >
            <Markdown>{content}</Markdown>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
