import React from "react";
import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { SteamItemPriceData } from "../../types/steam";
import { regression } from "../../utils/math/regression";

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface PriceGraphProps {
    data: SteamItemPriceData;
}

const PriceGraph: React.FC<PriceGraphProps> = ({ data }) => {
    const labels = data.map((day) => day[0]);
    const pricesData = data.map((day) => day[1]);
    const priceRegression = regression(pricesData as number[]);
    const regressionLine = pricesData.map((_, index) => priceRegression.slope * index + priceRegression.intercept);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Price of Kilowatt case",
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#808080",
                },
                grid: {
                    color: "#1B2939",
                },
            },
            y: {
                ticks: {
                    color: "#808080",
                },
                grid: {
                    color: "#1B2939",
                },
            },
        },
    };

    const chartData = {
        labels,
        datasets: [
            {
                label: "Price of Kilowatt case",
                data: pricesData,
                borderColor: "rgb(104, 143, 62)",
                backgroundColor: "rgba(104, 143, 62, 0.5)",
                pointRadius: 0,
            },
            {
                label: "Kilowatt case price regression",
                data: regressionLine,
                fill: false,
                borderColor: "rgba(104, 143, 62, 0.5)",
                borderDash: [5, 5],
                pointRadius: 0,
            }
        ],
    };

    return (
        <>
            <Line options={options} data={chartData} />
        </>
    );
};

export default PriceGraph;
