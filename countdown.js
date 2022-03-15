const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const endTime = document.querySelector(".end-time")
const timeLeft = document.querySelector(".time-left")
const items = document.querySelectorAll(".time-box h3")

let futureDate = new Date(2022,02,27,10,00,0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const mins = ("0" + futureDate.getMinutes()).slice(-2);
const day = weekdays[futureDate.getDay()];

endTime.textContent = `One Piece chapter 1044 releases on ${day}, ${date} ${month} ${year} @ ${hour}:${mins} a.m EST`;



// end time in ms
const futureTime = futureDate.getTime();


function remainingTime() {
    const currentTime = new Date().getTime();
    const rTime = futureTime - currentTime;
    console.log(rTime);

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMin = 60*1000;
    const oneSecond = 1000; 

    let days = Math.floor(rTime/oneDay);
    let hours = Math.floor((rTime/oneHour)-(days*24));
    let mins = Math.floor((rTime/oneMin) - ((days*24*60)+ (hours*60)));
    let secs = Math.floor((rTime/oneSecond) - ((days*24*60*60) + (hours*60*60) + (mins*60)));

    const values = [days,hours,mins,secs];

    function format (item) {
        if(item < 10){
            return (item = `0${item}`)
        }
        return item;
    }

    items.forEach(function(item,index) {
        item.innerHTML = format(values[index]);
    });
    if (rTime< 0) {
        clearInterval(countdown)
        timeLeft.innerHTML = `One Piece CHAPTER 1044 IS OUT!!! Go read it (<a href="https://www.viz.com/shonenjump/chapters/one-piece" target="_blank">Here<a/>)`
    }
}


let countdown = setInterval(remainingTime, 1000);
remainingTime();
