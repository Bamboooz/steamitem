import { Timespan } from "../../enums/timespan";

function dateWithin(date: Date, timespan: Timespan): boolean {
    const now = new Date();
    let startDate: Date;

    switch (timespan) {
        case Timespan.DAY:
            startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
            break;
        case Timespan.WEEK:
            startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
            break;
        case Timespan.MONTH:
            startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
            break;
        case Timespan.YEAR:
            startDate = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
            break;
        case Timespan.ALL:
        default:
            startDate = new Date(0); // epoch
            break;
    }

    return date >= startDate && date <= now;
}

export { dateWithin };
