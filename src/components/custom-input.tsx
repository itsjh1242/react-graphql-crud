import { Separator } from "@radix-ui/react-separator";
import { Popover } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";

export const MultiSearch = () => {
  return (
    <div className="h-14 flex items-center space-x-4 text-sm px-3 py-2 border rounded-xl max-w-[700px]">
      <input className="h-10 focus:outline-none" placeholder="어디로 가시나요?" />
      <Separator orientation="vertical" />
      <Popover>
        <PopoverTrigger asChild>
          <p>체크인 / 체크아웃</p>
        </PopoverTrigger>
      </Popover>
    </div>
  );
};
