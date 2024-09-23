const fs = require('fs').promises;
const price = require('./receiver'); 
const utils = require('./utils');

async function fetchAndStore() {
    const now = new Date();
    
    let priceList = [await price.getToday()];
    
    if (now.getHours() >= 15) {
        const tomorrowPrice = await price.getTomorrow();
        priceList.push(tomorrowPrice);
    }

    try {
        await fs.writeFile('cache.json', JSON.stringify(priceList), 'utf-8');
        console.log('Data saved to cache!');
    } catch (err) {
        console.error('Error saving data to cache:', err);
    }

    return priceList;
}

async function checkFile() {
    const begOfDay = new Date();
    begOfDay.setHours(0, 0, 0, 0)
    const today = utils.toLocalISOString(begOfDay).slice(0, -8);

    try {
        const data = await fs.readFile('cache.json', 'utf-8');
        const priceList = JSON.parse(data);
        const todayList = priceList[0].series;

        let todayExists = false;
        try {
            for (let i in todayList){
                if (todayList[i].startDate == today){
                    todayExists = true;
                    break;
                }
            }
        } catch(err) {
            console.log("Cache file in wrong format");
        }

        if (!todayExists) {
            return await fetchAndStore();
        }

        return priceList;

    } catch (err) {
        console.log('Cache file missing or error reading cache:', err);
        return await fetchAndStore();
    }
}

async function cache() {
    try {
        const data = await checkFile();
        return data;
    } catch (err) {
        console.error('Error in cache function:', err);
        throw err;
    }
}

module.exports = {cache};