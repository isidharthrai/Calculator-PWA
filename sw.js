
var cacheName = 'version(final)';

var cacheFiles = [
	'./',
	'./index.html',
	'./style/style.css',
	'./script/app.js',
	'./sw.js',
	'./manifest.json',
	'./icon.png'
]

self.addEventListener('install', function(e){

	console.log('[Service Worker] Installed');

	e.waitUntil(

		caches.open(cacheName).then(function(cache)	{

			console.log('[Service Worker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
		})
	);
});


self.addEventListener('activate', function(e)	{
	console.log('[Service Worker] Activated');
	e.waitUntil(

		caches.keys().then(function(cacheNames){
			
			return Promise.all(cacheNames.map(function(thisCacheName){
			
				if(thisCacheName != cacheName){
			
					console.log('[Service Worker] Removing Cached Files from Cache- ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}))
		})
	);
})


self.addEventListener('fetch', function(e) {
	console.log('[ServiceWorker] Fetch', e.request.url);

	// e.respondWidth Responds to the fetch event
	e.respondWith(

		// Check in cache for the request being made
		caches.match(e.request)


			.then(function(response) {

				// If the request is in the cache
				if ( response ) {
					console.log("[ServiceWorker] Found in Cache", e.request.url, response);
					// Return the cached version
					return response;
				}

				// If the request is NOT in the cache, fetch and cache

				var requestClone = e.request.clone();
				fetch(requestClone)
					.then(function(response) {

						if ( !response ) {
							console.log("[ServiceWorker] No response from fetch ")
							return response;
						}

						var responseClone = response.clone();

						//  Open the cache
						caches.open(cacheName).then(function(cache) {

							// Put the fetched response in the cache
							cache.put(e.request, responseClone);
							console.log('[ServiceWorker] New Data Cached', e.request.url);

							// Return the response
							return response;
			
				        }); // end caches.open

					})
					.catch(function(err) {
						console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
					});


			}) // end caches.match(e.request)
	); // end e.respondWith
});