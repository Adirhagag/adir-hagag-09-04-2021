
export const utilService = {
    delay,
    getRandomInt,
    makeId,
    convertName,
    getDueDate,
    createTime,
    getModalPos,
    getDayByDate
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function convertName(fullname) {
    if (!fullname) return
    let letterName;
    const names = fullname.split(' ')
    if (!names[1]) letterName = names[0][0].toUpperCase()
    else letterName = names[0][0].toUpperCase() + names[1][0].toUpperCase()
    return letterName
}

function getDueDate(timeStamp) {
    var stampDate = new Date(timeStamp);
    const allMonths = ["Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const month = allMonths[stampDate.getMonth()]
    const day = stampDate.getDate()
    const date = `${month} ${day}`
    return date
}

function createTime() {
    var timeNow = new Date();
    var hours = timeNow.getHours();
    var minutes = timeNow.getMinutes();
    var seconds = timeNow.getSeconds();
    var timeString = "" + ((hours > 12) ? hours - 12 : hours);
    timeString += ((minutes < 10) ? ":0" : ":") + minutes;
    timeString += ((seconds < 10) ? ":0" : ":") + seconds;
    return timeString;
}

function getModalPos(ev, { width, height }) {

    const diffX = window.innerWidth - ev.clientX
    const diffY = window.innerHeight - ev.clientY
    const pos = { x: ev.clientX, y: ev.clientY }

    if (pos.x < width) pos.x = 10
    if (diffX < width) pos.x = window.innerWidth - (width + 10)
    if (diffY < height) pos.y -= (height - diffY)

    return pos
}

function getDayByDate(date) {
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var today = new Date(date);
    const day = days[today.getDay()]
    
    return day
}