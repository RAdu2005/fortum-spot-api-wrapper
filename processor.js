const price = require('./cacher');
const utils = require('./utils');

function dayToNumber(day){
    if (day == "today") {return 0;}
    return 1;
}

function checkTomorrow(day){
    if (day == 0) {return true;}
    
    const now = new Date();
    if (now.getHours() >= 15){
        console.log("it's past 15");
        return true;
    }
    return false;
}

module.exports.getNow = async (day) => {
    day = dayToNumber(day);
    const priceList = await price.cache();

    let now = new Date();
    now.setUTCMinutes(0, 0, 0);

    const nowISO = utils.toLocalISOString(now).slice(0, -8);

    for (let i in priceList[0].series) {
        if(priceList[0].series[i].startDate == nowISO) {
            const priceFloat = Math.round(parseFloat(priceList[0].series[i].value) * 100) / 100;
            return priceFloat;
        }
    }

    return null;
}

module.exports.getAverage = async (day) => {
    day = dayToNumber(day);
    if(!checkTomorrow(day)) {return -1;}

    const priceList = await price.cache();

    let sumOfPrices = 0;
    for (let i in priceList[day].series) {
        sumOfPrices += priceList[day].series[i].value;
    }

    return Math.round(sumOfPrices / 24 * 100) / 100;
}

module.exports.getMaximum = async (day) => {
    day = dayToNumber(day);
    if(!checkTomorrow(day)) {return -1;}

    const priceList = await price.cache();

    let max = -1;
    for(let i in priceList[day].series) {
        if (priceList[day].series[i].value > max){
            max = priceList[day].series[i].value;
        }
    }

    return Math.round(max * 100) / 100;
}

module.exports.getMinimum = async (day) => {
    day = dayToNumber(day);
    if(!checkTomorrow(day)) {return -1;}

    const priceList = await price.cache();

    let min = priceList[day].series[0].value;
    for(let i in priceList[day].series) {
        if(i == 0) {continue;}
        if (priceList[day].series[i].value < min){
            min = priceList[day].series[i].value;
        }
    }

    return Math.round(min * 100) / 100;
}

module.exports.getNextHour = async () => {
    const priceList = await price.cache();

    const now = new Date();
    if(now.getHours() == 23){
        return Math.round(priceList[1].series[0].value * 100) / 100;
    } else {
        now.setHours(now.getHours() + 1, 0, 0, 0);
        const nowString = utils.toLocalISOString(now).slice(0, -11);
        for (let i in priceList[0].series){
            if (priceList[0].series[i].startDate.slice(0, -3) == nowString){
                return Math.round(priceList[0].series[i].value * 100) / 100;
            }
        }
    }
}
