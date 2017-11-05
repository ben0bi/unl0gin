// unl0gin injector for Facebook.com, FireFox version.
// this is the function called when pressing the button.
function unl0gin_siringe()
{

	// remove the pinterest login screen.
	var myElements = document.querySelectorAll(".fbNubButton");
	for (var i = 0; i < myElements.length; i++)
	{
		// remove chat button.
		myElements[i].style.display = "none";
	};

	// or it may be a sub div of the DenzelReactBridge class div.
	myElements = document.querySelectorAll(".fbNubFlyout");
	for (var i = 0; i < myElements.length; i++)
	{
		// remove chat button.
		myElements[i].style.display = "none";
	};

// "return" this text to the chrome plugin.
return "Hidden the ann0ying fagb00k chat wind0w."
}
