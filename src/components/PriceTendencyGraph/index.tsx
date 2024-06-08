import React from "react";
import { Chart } from "chart.js";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";

import { SteamItemPriceData } from "../../types/steam";
import { DayOfWeek, getDayOfWeek } from "../../utils/time/weekday";
import { Tendencies } from "../../types/tendency";
import { median } from "../../utils/math/median";
import { hourToNumber } from "../../utils/time/hour";

Chart.register(MatrixController, MatrixElement);

interface PriceTendencyGraphProps {
    data: SteamItemPriceData;
}

const PriceTendencyGraph: React.FC<PriceTendencyGraphProps> = ({ data }) => {
    const tendencyData = data.map((day) => {
        const dayOfWeek = getDayOfWeek(new Date(day[0]));
        const hour = day[0].split(" ")[day[0].split(" ").length - 1];
        const price = day[1];

        return [dayOfWeek, hour, price];
    }) as Tendencies;

    const sortedPriceData: { [dayOfWeek: number]: { [hour: string]: number[] } } = {
        [DayOfWeek.MONDAY]: {},
        [DayOfWeek.TUESDAY]: {},
        [DayOfWeek.WEDNESDAY]: {},
        [DayOfWeek.THURSDAY]: {},
        [DayOfWeek.FRIDAY]: {},
        [DayOfWeek.SATURDAY]: {},
        [DayOfWeek.SUNDAY]: {},
    };

    tendencyData.forEach((entry) => {
        const [dayOfWeek, hour, price] = entry;

        if (!sortedPriceData[dayOfWeek][hour]) {
            sortedPriceData[dayOfWeek][hour] = [];
        }

        sortedPriceData[dayOfWeek][hour].push(price);
    });

    const heatmapData = Object.keys(sortedPriceData).map((day) => {
        const dayOfWeek = Number(day);

        return Object.keys(sortedPriceData[dayOfWeek]).map((hour) => {
            return { x: hourToNumber(hour), y: dayOfWeek, v: median(sortedPriceData[dayOfWeek][hour]) };
        });
    });

    const formattedHeatmapData = heatmapData.reduce((acc, val) => acc.concat(val), []);

    return (
        <>
            
        </>
    );
};

export default PriceTendencyGraph;
