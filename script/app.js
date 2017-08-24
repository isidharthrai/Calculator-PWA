if ('serviceWorker' in navigator) {

  navigator.serviceWorker
    .register('./sw.js', { scope: './' })
    .then(function(registration) {
      console.log("[Service Worker] Registered");
    })
    .catch(function(err) {
      console.log("[Service Worker] Failed to Register", err);
    })

}


// Function to perform HTTP request
var get = function(url) {
  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var result = xhr.responseText
                result = JSON.parse(result);
                resolve(result);
            } else {
                reject(xhr);
            }
        }
    };
    
    xhr.open("GET", url, true);
    xhr.send();

  }); 
};


 	
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
			
