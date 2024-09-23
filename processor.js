const price = require('./cacher');
const utils = require('./utils');

async function getNow(){
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

async function getAverageToday(){
    const priceList = await price.cache();

    let sumOfPrices = 0;
    for (let i in priceList[0].series) {
        sumOfPrices += priceList[0].series[i].value;
    }

    return Math.round(sumOfPrices / 24 * 100) / 100;
}

module.exports = {getNow, getAverageToday};