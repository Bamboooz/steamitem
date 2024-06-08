import { Trend } from "../../enums/trend";

function currentGraphTrend(data: number[]): Trend {
    const lastItem = data[data.length - 1];
    const secondLastItem = data[data.length - 2];

    if (lastItem > secondLastItem) {
        return Trend.GROWING;
    } else if (lastItem === secondLastItem) {
        return Trend.STABLE;
    } else {
        return Trend.DECLINING;
    }
}

export { currentGraphTrend };
