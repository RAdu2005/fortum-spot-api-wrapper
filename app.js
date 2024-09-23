const express = require('express');
const app = express();
const price = require('./processor.js');


app.get('/now', async (req, res) => {
    try{
        const priceNow = await price.getNow();

        res.status(200).json({
            price: priceNow
        })
    } catch (error){
        console.error('Error fetching price list', error);
        resizeTo.status(500).json({
            message: 'Error fetching price list',
            error: error.message
        })
    }
});

app.get('/averageToday', async (req, res) => {
    try{
        const averageToday = await price.getAverageToday();

        res.status(200).json({
            price: averageToday
        })
    } catch (error){
        console.error('Error fetching price list', error);
        resizeTo.status(500).json({
            message: 'Error fetching price list',
            error: error.message
        })
    }
})

module.exports = app;