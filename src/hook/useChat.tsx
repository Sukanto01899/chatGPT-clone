import { AxiosError } from "axios";
import { useState } from "react";
import { handleChatApi } from "../api/chatApi";

const useChat = () => {
  const [error, setError] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string>("");

  const mutation = async (input: string) => {
    setLoading(true);
    try {
      const res = await handleChatApi(input);
      console.log(res);
      setData(res);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err as AxiosError);
    }
  };
  return { error, loading, data, mutation, setData };
};

export default useChat;
