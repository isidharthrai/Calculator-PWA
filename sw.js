var cacheName = 'version1(final)';

var cacheFiles = [
	'./',
	'./index.html',
	'./style/style.css',
	'./script/app.js',
	'./sw.js'
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


self.addEventListener('install', function(e){
	
	console.log('[Service Worker] Fetching',/* e.request.url*/);

/*	e.respondwith(

		caches.match(e.request)

		.then(function(response){
			if (response){
				/*console.log('[Service Worker] found in Cache', e.request.url);
				return response;
			}

			var requestClone = e.request.clone();

			fetch(requestClone)
				.then(function(response){

					if(!response){

						console.log('[Service Worker] No response from fetch');
						return response;
					}

					var responseClone = response.clone();

					caches.open(cacheName).then(function(cache)	{
						
						cache.put(e.request, responseClone);
						return response;

					});



				})

				.catch(function(err){
					console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
				})
		})
	);*/
})


