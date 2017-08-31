if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('./sw.js')
    .then(function(registration) {
      console.log("[Service Worker] Registered");
    })
    .catch(function(err) {
      console.log("[Service Worker] Failed to Register", err);
    })

}
 function imgLoad(url) {
  return new Promise(function(resolve, reject) {      
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    request.onload = function() {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
      }
    };

    request.onerror = function() {
      reject(Error('There was a network error.'));
    };

    request.send();
  });
}

 	
			function Del(val)
			{
				document.getElementById("d").value=val;
			}
			function get(val)
			{
				document.getElementById("d").value+=val;
			}
			function equal() 
			{	 
				try 
				{ 
  					Del(eval(document.getElementById("d").value)) 	
				} 
				catch(e) 
				{
  					Del('Error') 
				}	 
			}
			
