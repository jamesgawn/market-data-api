# Market Data API

A thin screen scrapper wrapper to make it easier to obtain latest price data for various types of market data. Mostly tested for Fund prices.

## Usage

The follow paths are supported: 

* / 
* /fund/_isin_ - To retrieve the associated fund price, replace ISIN with the relevant value for the fund concerned. e.g. /fund/GB00B0CNGR59

## Development

The following commands are supported: 

* npm run dev - To run the worker locally.
* npm run start - To run the worker locally.
* npm run test - To run the unit tests.
* npm run deploy - To deploy the worker to Cloudflare.