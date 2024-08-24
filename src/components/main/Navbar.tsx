import {
  AppWindow,
  ChevronDown,
  FilePenLine,
  Menu,
  Upload,
} from "lucide-react";
import Button from "../sub/Button";

type SidebarProps = {
  setIsFullWidthShow: (arg: boolean) => void;
  isFullWideShow: boolean;
  setIsOpen: (arg: boolean) => void;
};

const Navbar = ({
  setIsFullWidthShow,
  isFullWideShow,
  setIsOpen,
}: SidebarProps) => {
  return (
    <div className="w-full pb-4 flex justify-between items-start">
      <Button className="md:hidden" onClick={() => setIsOpen(true)}>
        <Menu className="text-gray-400" />
      </Button>

      <div className="flex items-center">
        <Button
          className={`hidden ${isFullWideShow ? "hidden" : "md:block"}`}
          onClick={() => setIsFullWidthShow(!isFullWideShow)}
        >
          <AppWindow className="text-gray-400" />
        </Button>
        <Button className={`hidden ${isFullWideShow ? "hidden" : "md:block"}`}>
          <FilePenLine className="text-gray-400" />
        </Button>
        <Button className="flex items-center gap-2 text-white">
          <span className="text-xl font-semibold text-gray-400">ChatGPT</span>
          <ChevronDown />
        </Button>
      </div>

      <div className="flex items-center gap-2 overflow-auto">
        <Button>
          <Upload className="text-gray-400" />
        </Button>
        <Button className="rounded-full overflow-hidden object-cover hidden md:block">
          <img src="/me.jpg" alt="" className="h-9 w-9 rounded-full" />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
