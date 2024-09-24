const express = require('express');
const app = express();
const price = require('./processor.js');


app.get('/now', async (req, res) => {
    try{
        const priceNow = await price.getNow();

        res.status(200).json({
            price: priceNow
        });
    } catch (error){
        console.error('Error fetching price list', error);
        resizeTo.status(500).json({
            message: 'Error fetching price list',
            error: error.message
        })
    }
});

app.get('/average-today', async (req, res) => {
    try{
        const average = await price.getAverage("today");

        res.status(200).json({
            price: average
        });
    } catch (error){
        console.error('Error fetching price list', error);
        resizeTo.status(500).json({
            message: 'Error fetching price list',
            error: error.message
        })
    }
});

app.get('/average-tomorrow', async (req, res) => {
    try{
        const average = await price.getAverage("tomorrow");

        res.status(200).json({
            price: average
        });
    } catch (error){
        console.error('Error fetching price list', error);
        resizeTo.status(500).json({
            message: 'Error fetching price list',
            error: error.message
        })
    }
});

app.get('/minimum-today', async (req, res) => {
    try{
        const minimum = await price.getMinimum("today");

        res.status(200).json({
            price: minimum
        });
    } catch (error){
        console.error('Error fetching price list', error);
        resizeTo.status(500).json({
            message: 'Error fetching price list',
            error: error.message
        })
    }
});

app.get('/minimum-tomorrow', async (req, res) => {
    try{
        const minimum = await price.getMinimum("tomorrow");

        res.status(200).json({
            price: minimum
        });
    } catch (error){
        console.error('Error fetching price list', error);
        resizeTo.status(500).json({
            message: 'Error fetching price list',
            error: error.message
        })
    }
});

app.get('/maximum-today', async (req, res) => {
    try{
        const maximum = await price.getMaximum("today");

        res.status(200).json({
            price: maximum
        });
    } catch (error){
        console.error('Error fetching price list', error);
        resizeTo.status(500).json({
            message: 'Error fetching price list',
            error: error.message
        })
    }
});

app.get('/maximum-tomorrow', async (req, res) => {
    try{
        const maximum = await price.getMaximum("tomorrow");

        res.status(200).json({
            price: maximum
        });
    } catch (error){
        console.error('Error fetching price list', error);
        resizeTo.status(500).json({
            message: 'Error fetching price list',
            error: error.message
        })
    }
});

app.get('/next-hour', async (req, res) => {
    try{
        const nextHour = await price.getNextHour();

        res.status(200).json({
            price: nextHour
        });
    } catch (error){
        console.error('Error fetching price list', error);
        resizeTo.status(500).json({
            message: 'Error fetching price list',
            error: error.message
        })
    }
});


module.exports = app;