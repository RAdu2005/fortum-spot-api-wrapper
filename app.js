const express = require('express');
const app = express();
const price = require('./processor.js');

const unit = "c/kWh";


app.get('/now', async (req, res) => {
    try{
        const priceNow = await price.getNow();

        res.status(200).json({
            price: priceNow,
            unit: unit
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
            price: average,
            unit: unit
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
            price: average,
            unit: unit
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
            price: minimum,
            unit: unit
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
            price: minimum,
            unit: unit
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
            price: maximum,
            unit: unit
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
            price: maximum,
            unit: unit
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
            price: nextHour,
            unit: unit
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