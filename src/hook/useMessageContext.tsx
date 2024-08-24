import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error(
      "Message context must provide context MessageContextProvider"
    );
  }
  return context;
};

export default useMessageContext;
