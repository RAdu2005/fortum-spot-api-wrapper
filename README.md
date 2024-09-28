# fortum-spot-api-wrapper

  

This Node.js program allows for easy access to Fortum Finland's spot price API with easy-to-use endpoints.  

  

The wrapper uses the endpoint `https://web.fortum.fi/api/v2/spot-price-anonymous` to get information about today's (and tomorrow's) electricity price and then hosts a node webserver with available custom endpoints.

  

### Current available endpoints:  

  

`/now` returns the price at the time of the request  

  `/next-hour` returns the price for the next hour (at sharp)

`/average-today` returns the average price for the day (24h)

`/average-tomorrow` same as previous, for next day

`/minimum-today` returns the minimum price for today

`/minimum-tomorrow` returns the minimum price for next day

`/maximum-today` returns the maximum price for today

`/maximum-tomorrow` returns the maximum price for next day

`margin=` is an optional parameter to add the spot margin (in c/kWh) of your contract to the price (default 0)
  

# Usage


You need to have Node.js installed and do  

```nmp install```

to install dependencies and then

  

```node server.js```

to run the server.

  

That's it! You can now access the endpoints via HTTP.