import { ArrowUp, Paperclip } from "lucide-react";
import { MouseEvent, useRef } from "react";

type ChatFormProps = {
  setInput: (arg: string) => void;
  handleSubmit: () => void;
  loading: boolean;
};

const ChatForm = ({ setInput, handleSubmit, loading }: ChatFormProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleForm = (e: MouseEvent) => {
    e.preventDefault();
    handleSubmit();
    if (ref.current) {
      ref.current.value = "";
    }
  };

  return (
    <div className=" w-full lg:w-[80%] xl:w-[58%] h-20">
      <form className="w-full h-12 px-12 bg-[#2f2f2f] relative rounded-3xl flex items-center">
        <input
          type="text"
          ref={ref}
          className="w-full h-full outline-none bg-transparent text-lg text-white"
          placeholder="text here"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Paperclip className="absolute text-white left-3  py-2 h-9 w-9 font-semibold cursor-pointer rounded-full" />
        <button
          type="submit"
          disabled={loading}
          onClick={handleForm}
          className={`absolute  py-2 h-9 w-9 font-semibold cursor-pointer rounded-full right-3 flex items-center justify-center ${
            loading ? "bg-slate-300" : "bg-white"
          }`}
        >
          <ArrowUp />
        </button>
      </form>

      <p className="text-center text-gray-400 py-1 text-sm">
        ChatGPT can make mistakes. Check important info.
      </p>
    </div>
  );
};

export default ChatForm;
