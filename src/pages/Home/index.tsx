import React, { useRef, useState } from "react";
import { LuChevronDown, LuSearch } from "react-icons/lu";

import { Timespan } from "../../types/timespan";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { cn } from "../../utils/cn";
import steam from "../../assets/steam.png";

const Home: React.FC = () => {
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const [timespan, setTimespan] = useState<Timespan>(Timespan.MONTH);

    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(inputRef, () => inputRef.current?.blur());
    useOnClickOutside(dropdownRef, () => setDropdownVisible(false));

    return (
        <div className="size-full bg-neutral-900 flex flex-col items-center justify-center gap-12 select-none">
            <div className="flex flex-col items-center justify-center gap-16">
                <div className="flex items-center justify-center gap-4">
                    <img src={steam} className="size-16" />

                    <h1 className="font-medium text-neutral-300 text-[32px]">steamitem</h1>
                </div>

                <h2 className="text-neutral-400 text-[16px] max-w-96"><strong>steamitem</strong> is a website where you can see, at which day of the week should you sell a certain Steam item for maximum profit, based on the price history of the selected item.</h2>
            </div>
            
            <form className="flex flex-col items-center justify-center gap-4" onSubmit={() => {}}>
                <div onClick={() => inputRef.current?.focus()} className="w-96 h-12 px-3 gap-3 flex items-center justify-between text-neutral-300 rounded-lg bg-neutral-800 border border-neutral-700 hover:shadow-xl">
                    <LuSearch className="text-[20px]" />

                    <input type="text" ref={inputRef} placeholder="Steam item URL" className="size-full pt-[1px] text-[16px] bg-transparent outline-none" />
                </div>

                <div ref={dropdownRef} onClick={() => setDropdownVisible(!dropdownVisible)} className="w-96 h-12 flex items-center justify-between px-3 relative text-neutral-300 text-[16px] rounded-lg bg-neutral-800 border border-neutral-700 hover:shadow-xl">
                    <p>{timespan}</p>
                    
                    {dropdownVisible &&
                        <div className="absolute z-50 -left-[1px] top-[63px] w-96 h-60 rounded-lg bg-neutral-800 border border-neutral-700">
                            <button onClick={() => setTimespan(Timespan.DAY)} className="w-full h-12 flex items-center justify-between rounded-t-lg px-3 hover:bg-neutral-700">
                                <p>This day</p>
                            </button>

                            <button onClick={() => setTimespan(Timespan.WEEK)} className="w-full h-12 flex items-center justify-between px-3 hover:bg-neutral-700">
                                <p>This week</p>
                            </button>

                            <button onClick={() => setTimespan(Timespan.MONTH)} className="w-full h-12 flex items-center justify-between px-3 hover:bg-neutral-700">
                                <p>This month</p>
                            </button>

                            <button onClick={() => setTimespan(Timespan.YEAR)} className="w-full h-12 flex items-center justify-between px-3 hover:bg-neutral-700">
                                <p>This year</p>
                            </button>

                            <button onClick={() => setTimespan(Timespan.ALL)} className="w-full h-12 flex items-center justify-between rounded-b-lg px-3 hover:bg-neutral-700">
                                <p>All time</p>
                            </button>
                        </div>
                    }

                    <LuChevronDown className={cn("transition-all", dropdownVisible ? "" : "-rotate-180")} />
                </div>

                <button className="w-96 h-12 flex items-center justify-center gap-2 rounded-lg bg-green-700 hover:bg-green-600 hover:active:bg-green-500 border border-green-800 hover:shadow-xl">
                    <LuSearch className="text-neutral-300 text-[20px]" />
                    
                    <p className="text-neutral-300 text-[16px] mt-[1px]">Search</p>
                </button>
            </form>
        </div>
    );
};

export default Home;
