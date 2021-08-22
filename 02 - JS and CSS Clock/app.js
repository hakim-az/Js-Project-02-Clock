const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function sateDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegres = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegres}deg)`;

    const minutes = now.getMinutes();
    const minutesDegres = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegres}deg)`;

    const hours = now.getHours();
    const hoursDegres = ((hours / 24) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegres}deg)`;
}

setInterval(sateDate, 1000);