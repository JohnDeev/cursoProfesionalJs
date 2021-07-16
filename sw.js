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
    //    './',
    //    '/index.html',
    //    '/src/index.js',
    //    '/src/MediaPlayer.js',
    //    '/plugins/AutoPlay.js',
    //    '/plugins/AutoPause.js',
    //    '/css/style.css',
    //    '/assets/BigBuckBunny_512kb.mp4',       
       
    ]) 
}

async function cacheResponse( request) {
   
}

async function updateCache( request) {
     const cache = await caches.open('v1');
    const response = await cache.match(request);
    console.log(`Code: ${response.status} |
    Message: ${response.statusText}`)
    if(response.status === 206){
        console.log('Respuesta parcial, no se actualiza cache ...');
    } else {
        cache.put(request, response.clone());
    }
    return cache;
    
}