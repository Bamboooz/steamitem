function median(data: number[]): number {
    data.sort((a, b) => a - b);

    const len = data.length;
    const mid = Math.floor(len / 2);

    if (len % 2 === 0) {
        return (data[mid - 1] + data[mid]) / 2;
    } else {
        return data[mid];
    }
}

export { median };
