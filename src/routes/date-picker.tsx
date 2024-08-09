import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const DatePicker = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex justify-between items-center min-w-[750px] h-16 rounded-md border border-input bg-transparent p-2 text-sm shadow-sm transition-colors">
        <div className="flex flex-row items-center px-3 w-full">
          <div className="w-1/3">
            <input
              type="text"
              id="search-query"
              placeholder="숙소명/장소/키워드 검색"
              className="w-full border-none bg-transparent outline-none placeholder-text-muted-foreground"
            />
          </div>
          <div className="h-8 border-l border-gray-300 mx-3" />
          <div className="w-1/3">
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center cursor-pointer">
                  <input
                    type="text"
                    value={date && date.from && date.to ? `${format(date.from, "y.LL.dd")} - ${format(date.to, "y.LL.dd")}` : ""}
                    placeholder="체크인/체크아웃"
                    readOnly
                    className="border-none bg-transparent outline-none placeholder-text-muted-foreground cursor-pointer w-full"
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar initialFocus mode="range" defaultMonth={date?.from} selected={date} onSelect={setDate} numberOfMonths={2} />
              </PopoverContent>
            </Popover>
          </div>
          <div className="h-8 border-l border-gray-300 mx-3" />
          <div className="w-1/3">
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center cursor-pointer">
                  <input
                    type="text"
                    placeholder="인원"
                    readOnly
                    className="border-none bg-transparent outline-none placeholder-text-muted-foreground cursor-pointer w-full"
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] space-y-4">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-sm">성인</p>
                    <p className="text-xs text-gray-500 w-[120px]">13세 이상</p>
                  </div>
                  <div className="flex flex-row items-center space-x-4">
                    <Button variant="outline" className="rounded-full border-black" size="icon">
                      -
                    </Button>
                    <p className="w-4 text-center text-sm">1</p>
                    <Button variant="outline" className="rounded-full border-black" size="icon">
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="text-sm">유아</p>
                    <p className="text-xs text-gray-500 w-[120px]">13세 이상</p>
                  </div>
                  <div className="flex flex-row items-center space-x-4">
                    <Button variant="outline" className="rounded-full border-black" size="icon">
                      -
                    </Button>
                    <p className="w-4 text-center text-sm">1</p>
                    <Button variant="outline" className="rounded-full border-black" size="icon">
                      +
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <Button className="w-[46px] h-[46px] flex items-center justify-center px-3">
          <Search size={24} />
        </Button>
      </div>
    </div>
  );
};
