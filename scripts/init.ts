let secondsInDay = 86400;
let secondsInHour = 3600;
let secondsInMinute = 60;

let currentSeconds = 14 * secondsInDay;

let cards: NodeListOf<HTMLElement> = document.querySelectorAll('.flip-card');

interface Time {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
};

function formatTime(value: number): string {
    return String(value).padStart(2, '0');
}

function getTime(seconds: number): string[] {
    let time: Time = {
        days: (seconds - (seconds = seconds % secondsInDay)) / secondsInDay,
        hours: (seconds - (seconds = seconds % secondsInHour)) / secondsInHour,
        minutes: (seconds - (seconds = seconds % secondsInMinute)) / secondsInMinute,
        seconds: seconds
    };
    return [formatTime(time.days), formatTime(time.hours), formatTime(time.minutes), formatTime(time.seconds)];
}

function setTime(time: string, element: HTMLElement): void {
    if (element.children[0].innerHTML !== time) {
        element.style.setProperty('--top-time', `'${element.children[0].innerHTML}'`);
        element.style.setProperty('--bottom-time', `'${time}'`);
        element.classList.toggle('flip');
        element.children[0].innerHTML = time;
        setTimeout(() => {
            element.children[1].innerHTML = time;
            element.classList.toggle('flip');
        }, 500);
    }
}

function init(): void {
    setInterval(() => {
        let formatedTime = getTime(currentSeconds);
        cards.forEach((card, index) => { setTime(formatedTime[index], card) });
        currentSeconds--;
    }, 1000);
}