function hourToNumber(hourString: string): number {
    const [hour] = hourString.split(":");
    
    return parseInt(hour, 10);
}

export { hourToNumber };
