import React from "react";

import PriceGraph from "../../components/PriceGraph";
import PriceTendencyGraph from "../../components/PriceTendencyGraph";
import { Timespan } from "../../enums/timespan";
import { dateWithin } from "../../utils/time/date";
import { SteamItemPriceData } from "../../types/steam";
import { exampleData } from "../../data";

const Item: React.FC = () => {
    const data = exampleData;

    function formatInputData(priceData: SteamItemPriceData, timespan: Timespan): SteamItemPriceData {
        const formattedPriceData = priceData
            .map((day) => {
                const newDayFormat = day[0].split(":")[0] + ":00";
                return [newDayFormat, day[1], day[2]];
            })
            .filter((day) => {
                return dateWithin(new Date(day[0]), timespan);
            });

        return formattedPriceData as SteamItemPriceData;
    };

    const formattedData = formatInputData(data as SteamItemPriceData, Timespan.MONTH);

    return (
        <>
            <div className="size-full flex bg-background">
                <div className="w-[70%] flex flex-col items-center justify-start">
                    <PriceGraph data={formattedData} />

                    <PriceTendencyGraph data={formattedData} />
                </div>

                <div>

                </div>
            </div>
        </>
    );
};

export default Item;
