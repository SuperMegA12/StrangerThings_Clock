let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

setInterval(() => {
    let day = new Date
    let hour = day.getHours() * 30;
    let minutes = day.getMinutes() * 6;
    let seconds = day.getSeconds() * 6;

    h.style.transform = `rotateZ(${hour+(minutes/12)}deg)`
    m.style.transform = `rotateZ(${minutes}deg)`
    s.style.transform = `rotateZ(${seconds}deg)`

});



let hd = document.querySelector('#hd')
let md = document.querySelector('#md')
let sd = document.querySelector('#sd')

setInterval(() => {
    let dayd = new Date
    let hourd = dayd.getHours() * 30;
    let minutesd = dayd.getMinutes() * 6;
    let secondsd = dayd.getSeconds() * 6;

    hd.style.transform = `rotateZ(${hourd+(minutesd/12)}deg)`
    md.style.transform = `rotateZ(${minutesd}deg)`
    sd.style.transform = `rotateZ(${secondsd}deg)`

});