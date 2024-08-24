import {
  AppWindow,
  Bot,
  CircleFadingArrowUp,
  FilePenLine,
  LayoutGrid,
  Menu,
} from "lucide-react";
import Button from "../sub/Button";

type SidebarProps = {
  setIsFullWidthShow: (arg: boolean) => void;
  isFullWideShow: boolean;
  setIsOpen: (arg: boolean) => void;
};

const Sidebar = ({
  setIsFullWidthShow,
  isFullWideShow,
  setIsOpen,
}: SidebarProps) => {
  return (
    <div
      className={`flex flex-col justify-between gap-4 px-4 py-3 h-screen transition duration-100 ${
        isFullWideShow || "md:hidden"
      }`}
    >
      <div className="w-full flex justify-between items-center text-gray-300">
        <Button className="md:hidden" onClick={() => setIsOpen(false)}>
          <Menu className="text-gray-400" />
        </Button>
        <Button
          className="hidden md:block"
          onClick={() => setIsFullWidthShow(!isFullWideShow)}
        >
          <AppWindow className="text-gray-400" />
        </Button>
        <Button>
          <FilePenLine className="text-gray-400" />
        </Button>
      </div>

      <div className="flex flex-col gap-2 whitespace-nowrap overflow-auto flex-grow">
        <Button className="flex items-center text-gray-200 gap-2 w-full">
          <Bot />
          <span>chatGPT</span>
        </Button>

        <Button className="flex items-center text-gray-200 gap-2 w-full">
          <LayoutGrid />
          <span>Explore GPT</span>
        </Button>
      </div>

      <div className="">
        <Button className="flex items-center gap-2 ">
          <CircleFadingArrowUp className="text-white" />
          <div className="text-start">
            <h3 className="text-white">Upgrade plan</h3>
            <p className="text-[12px] text-gray-400">
              Get GPT-4, DALL·E, and more
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
