# fortum-spot-api-wrapper

This Node.js program allows for easy access to Fortum Finland's spot price API with easy-to-use endpoints.

The wrapper uses the endpoint `https://web.fortum.fi/api/v2/spot-price-anonymous` to get information about today's (and tomorrow's) electricity price and then hosts a node webserver with available custom endpoints.

### Current available endpoints:

`/now` retruns the price at the time of the request

`/averageToday` returns the average price for the day (24h)

### Usage

You need to have Node.js instlled and do

```nmp install``

to install dependencies

and then 

```node server.js```

to run the server.

That's it! You can now access the endpoints via HTTP/S.