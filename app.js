const express = require('express');
const app = express();
const price = require('./processor.js');

const unit = "c/kWh";


app.get('/now/:margin?', async (req, res) => {
    try{
        const margin = req.query.margin || 0;
        const priceNow = await price.getNow() + parseFloat(margin);

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

app.get('/average-today/:margin?', async (req, res) => {
    try{
        const margin = req.query.margin || 0;
        const average = await price.getAverage("today") + parseFloat(margin);

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

app.get('/average-tomorrow/:margin?', async (req, res) => {
    try{
        const margin = req.query.margin || 0;
        const average = await price.getAverage("tomorrow") + parseFloat(margin);

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

app.get('/minimum-today/:margin?', async (req, res) => {
    try{
        const margin = req.query.margin || 0;
        const minimum = await price.getMinimum("today") + parseFloat(margin);

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

app.get('/minimum-tomorrow/:margin?', async (req, res) => {
    try{
        const margin = req.query.margin || 0;
        const minimum = await price.getMinimum("tomorrow") + parseFloat(margin);

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

app.get('/maximum-today/:margin?', async (req, res) => {
    try{
        const margin = req.query.margin || 0;
        const maximum = await price.getMaximum("today") + parseFloat(margin);

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

app.get('/maximum-tomorrow/:margin?', async (req, res) => {
    try{
        const margin = req.query.margin || 0;
        const maximum = await price.getMaximum("tomorrow") + parseFloat(margin);

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

app.get('/next-hour/:margin?', async (req, res) => {
    try{
        const margin = req.query.margin || 0;
        const nextHour = await price.getNextHour() + parseFloat(margin);

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