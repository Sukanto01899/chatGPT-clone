import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { MessageProps } from "../App";

interface IMessageContext {
  messages: MessageProps[];
  setMessages: Dispatch<SetStateAction<IMessageContext["messages"]>>;
}

export const MessageContext = createContext<IMessageContext | null>(null);

const MessageContextProvider = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<IMessageContext["messages"]>([]);

  const value = useMemo(
    () => ({
      messages,
      setMessages,
    }),
    [messages]
  );

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

export default MessageContextProvider;
