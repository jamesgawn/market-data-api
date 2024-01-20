# Market Data API

A thin screen scrapper wrapper to make it easier to obtain latest price data for various types of market data. Mostly tested for Fund prices.

## Usage

The follow paths are supported: 

* / 
* /fund/<isin> - To retrieve the associated fund price

## Development

The following commands are supported: 

* npm run dev - To run the worker locally.
* npm run start - To run the worker locally.
* npm run test - To run the unit tests.
* npm run deploy - To deploy the worker to Cloudflare.