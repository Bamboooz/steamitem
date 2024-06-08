import { DayOfWeek } from "../../enums/dayOfWeek";

function getDayOfWeek(date: Date): DayOfWeek {
    const weekday = [DayOfWeek.SUNDAY, DayOfWeek.MONDAY, DayOfWeek.TUESDAY, DayOfWeek.WEDNESDAY, DayOfWeek.THURSDAY, DayOfWeek.FRIDAY, DayOfWeek.SATURDAY];
    
    return weekday[date.getDay()];
}

export { getDayOfWeek, DayOfWeek };
