
class tabla_frecuencias{
	function getTablaFrecuencias() {
		var texto=document.getElementById('texto');
	   var myRequest = new Request('https://5e79bb3b.ngrok.io/mind-map', {method: 'POST', body: {"article":texto}});
	   fetch(myRequest)
		.then(function(response) {
       		if(response.status == 200) return response.json();
       		else throw new Error('Something went wrong on api server!');
   		})	

   .then(function(response) {

       console.debug(response);
   })
	}
}
