"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clock = void 0;
let secondsInDay = 86400;
let secondsInHour = 3600;
let secondsInMinute = 60;
;
function formatTime(value) {
    return String(value).padStart(2, '0');
}
function clock(seconds) {
    let time = {
        days: (seconds - (seconds = seconds % secondsInDay)) / secondsInDay,
        hours: (seconds - (seconds = seconds % secondsInHour)) / secondsInHour,
        minutes: (seconds - (seconds = seconds % secondsInMinute)) / secondsInMinute,
        seconds: seconds
    };
    return `${formatTime(time.days)}${formatTime(time.hours)}${formatTime(time.minutes)}${formatTime(time.seconds)}`;
}
exports.clock = clock;
