const VERSION = 'v1';

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request;
    //get 
    
    if(request.method !== 'GET'){
        return;
    }

    //Buscar en caches
    event.respondWith(cacheResponse(request));

    // //Update cache
    event.waitUntil(updateCache(request));
})

async function precache() {
    const cache = await caches.open('v1')
    return cache.addAll([
       '/',
       '/index.html',
       '/src/index.js',
       '/src/MediaPlayer.js' ,
       '/plugins/AutoPlay.js',
       '/plugins/AutoPause.js',
       '/css/style.css',
       'assets/BigBuckBunny_512kb.mp4',
    ]) 
}

async function cacheResponse( request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache( request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
    
}