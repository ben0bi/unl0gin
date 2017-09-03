// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
function unl0gin(callback) 
{
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };
  
   chrome.tabs.query(queryInfo, function(tabs) {
    //var tab = tabs[0];
    //var url = tab.url;
    //console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(tabs);
  });
}


// show the render status.
function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}


// LET MAKE THE MAGIC HAPPEN - FUNCTION
document.addEventListener('DOMContentLoaded', function() {
	unl0gin(function(tabs)
	{
		var url = tabs[0].url;
		renderStatus('Unl0gging you in..\n(URL: ' + url+')');
 		
		var cso = new Object();
		cso= {
			'code': 'unl0gin_siringe();', 
			'allFrames': true
		};
		
		chrome.tabs.executeScript(null, cso, function(results)
		{
			renderStatus(results);
			window.close();
		});
	});
});
