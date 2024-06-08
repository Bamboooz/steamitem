import { Trend } from "../../enums/trend";

type Regression = {
    slope: number;
    intercept: number;
};

function regression(data: number[]): Regression {
    const n = data.length;
    const sumX = data.reduce((sum, val, index) => sum + index, 0);
    const sumY = data.reduce((sum, val) => sum + val, 0);
    const sumXY = data.reduce((sum, val, index) => sum + index * val, 0);
    const sumX2 = data.reduce((sum, val, index) => sum + index * index, 0);
  
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;
  
    return { slope, intercept };
}

function regressionTrend(regression: Regression): Trend {
    if (regression.slope > 0) {
        return Trend.GROWING;
    } else if (regression.slope === 0) {
        return Trend.STABLE;
    } else {
        return Trend.DECLINING;
    }
}

export { regression, regressionTrend };
