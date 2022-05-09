let secondsInDay = 86400;
let secondsInHour = 3600;
let secondsInMinute = 60;

interface Time {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
};

function formatTime(value: number): string {
    return String(value).padStart(2, '0');
}

export function clock(seconds: number): string {
    let time: Time = {
        days: (seconds - (seconds = seconds % secondsInDay)) / secondsInDay,
        hours: (seconds - (seconds = seconds % secondsInHour)) / secondsInHour,
        minutes: (seconds - (seconds = seconds % secondsInMinute)) / secondsInMinute,
        seconds: seconds
    };
    return `${formatTime(time.days)}${formatTime(time.hours)}${formatTime(time.minutes)}${formatTime(time.seconds)}`;
}