function pointer(element, value){

    element.style.setProperty('--rotation', value * 360);
    console.log(value);

}

function clock(){

    let hour = document.querySelector('[data-hour-hand]')
    let minute = document.querySelector('[data-minute-hand]')
    let second = document.querySelector('[data-second-hand]')

    const currentDate = new Date();
    
    const seconds = currentDate.getSeconds() / 60;
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    const hours = (minutes + currentDate.getHours()) / 12;

    pointer(second, seconds);
    pointer(minute, minutes);
    pointer(hour, hours);

}

setInterval(() => {
    
    clock();

}, 1000);