import useMessageContext from "../../hook/useMessageContext";
import Message from "../sub/Message";

interface IChatBoxProps {
  loading: boolean;
}

const ChatBox = ({ loading }: IChatBoxProps) => {
  const { messages } = useMessageContext();

  return (
    <div className="lg:w-[80%] xl:w-[58%] w-full flex flex-col">
      {messages?.map((msg, i) => (
        <Message key={i} role={msg.role} content={msg.content} />
      ))}

      {loading && <Message role="bot" content="loading" />}
    </div>
  );
};

export default ChatBox;
