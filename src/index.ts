export interface Env {
}

import { RequestLike, Router, error, json, withParams} from 'itty-router';
const router = Router();

router.all('*', withParams)

router.get('/fund/:isin', ({ isin }) => {
	return error(501, "Not yet implemented - " + isin);
});

router.get('/', () => {
	return new Response('Market Data API - For usage details github.com/jamesgawn/market-data-api');
});

  // 404 for everything else
router.all('*', () => error(404))

export default {
	fetch: (request: RequestLike, ...args: any) =>
		router
			.handle(request, ...args)
			.then(json)     // send as JSON
			.catch(error),  // catch errors
};