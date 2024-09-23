const axios = require('axios');
const utils = require('./utils');

const http = axios.create({
    baseURL : 'https://web.fortum.fi/api/v2/'
})

const priceListKey = 1047 //Hardcoded value for parameter, haven't found this to change over time

const getData = function(from, to){   
    console.log('API accessed'); 
    return http.get('/spot-price-anonymous', {
        params: {
            priceListKey : priceListKey,
            from: from,
            to: to
        }
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error;
    });
}

const getToday = function(){
    const from = new Date();
    from.setHours(0, 0, 0, 0);
    const fromISO = utils.toLocalISOString(from).slice(0, -1);

    const to = new Date();
    to.setHours(23, 59, 59, 999);
    const toISO = utils.toLocalISOString(to).slice(0, -1);

    return getData(fromISO, toISO);
}

const getTomorrow = function(){
    const from = new Date();
    from.setHours(0, 0, 0, 0);
    from.setDate(from.getDate() + 1);
    const fromISO = utils.toLocalISOString(from).slice(0, -1);
    
    const to = new Date();
    to.setHours(23, 59, 59, 999);
    to.setDate(from.getDate());
    const toISO = utils.toLocalISOString(to).slice(0, -1);

    return getData(fromISO, toISO);
}

module.exports = { getToday, getTomorrow };