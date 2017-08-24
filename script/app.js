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
 /*
// Function to perform HTTP request
function loadXMLDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "xmlhttp_info.txt", true);
  xhttp.send();
}*/


 	
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
			
