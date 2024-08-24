import { useEffect, useState } from "react";
import "./App.css";
import ChatBox from "./components/main/ChatBox";
import Navbar from "./components/main/Navbar";
import Sidebar from "./components/main/Sidebar";
import ChatForm from "./components/sub/ChatForm";
import useChat from "./hook/useChat";
import useMessageContext from "./hook/useMessageContext";

export interface MessageProps {
  role: "bot" | "user";
  content: string;
}

function App() {
  const [isFullWideShow, setIsFullWidthShow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, setMessages } = useMessageContext();
  const [response, setResponse] = useState<MessageProps | null>(null);
  const [question, setQuestion] = useState<MessageProps | null>(null);
  const { mutation, loading, data, setData } = useChat();

  const handleSubmit = async () => {
    const prompt: MessageProps = {
      role: "user",
      content: input,
    };

    setQuestion(prompt);

    mutation(input);
  };

  useEffect(() => {
    if (data) {
      const msg: MessageProps = {
        role: "bot",
        content: data,
      };
      setResponse(msg);
      setData("");
    }
  }, [data, setData]);

  useEffect(() => {
    if (question) {
      setMessages([...messages, question]);
      setQuestion(null);
    }
    if (response) {
      setMessages([...messages, response]);
      setResponse(null);
    }
  }, [response, question, messages, setMessages]);

  return (
    <main className="flex h-screen">
      {/* Left section */}
      <div
        className={`${isFullWideShow ? "md:w-64" : "md:w-0"} ${
          isOpen ? "left-0" : "-left-64"
        } md:block bg-[#171717] md:static  fixed z-10 transition-all duration-150`}
      >
        <Sidebar
          setIsFullWidthShow={setIsFullWidthShow}
          isFullWideShow={isFullWideShow}
          setIsOpen={setIsOpen}
        />
      </div>
      {/* Right Section */}
      <div className="bg-[#212121] flex-grow px-4 pt-3 flex flex-col items-center justify-between h-screen overflow-hidden">
        <Navbar
          setIsFullWidthShow={setIsFullWidthShow}
          isFullWideShow={isFullWideShow}
          setIsOpen={setIsOpen}
        />

        <div className="overflow-y-auto w-full flex justify-center flex-grow">
          <ChatBox loading={loading} />
        </div>
        <div className="w-full flex justify-center bg-[#212121]">
          <ChatForm
            setInput={setInput}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
