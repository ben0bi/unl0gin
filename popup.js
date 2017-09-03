/*
	Copyleft 2017 ben0bi/amarov
	v0.1.2
*/

function unl0gin() 
{
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  
   chrome.tabs.query(queryInfo, function(tabs) {
		var cso = new Object();
		cso= {
			'code': 'unl0gin_siringe();', 
			'allFrames': true
		};
		
		chrome.tabs.executeScript(null, cso, function(results)
		{
			// close the popup window after the operation.
			window.close();
		});
  });
}

// LET MAKE THE MAGIC HAPPEN - FUNCTION
document.addEventListener('DOMContentLoaded', function() {
	unl0gin();
});
