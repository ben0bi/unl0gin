// remove the pinterest login screen.
var myElements = document.querySelectorAll(".FullPageModal__scroller");
for (var i = 0; i < myElements.length; i++)
{
	// remove the login screen.
	myElements[i].style.display = "none";
	// remove the blocking background div. It ha no class or id assigned.
	myElements[i].parentElement.style.display = "none";	
};

// re-enable scrolling.
// it may be the thing with the id desktopWrapper.
var desk = document.getElementById('desktopWrapper');
if(desk)
	desk.style.position = "absolute";

// or it may be a sub div of the DenzelReactBridge class div.
myElements = document.querySelectorAll(".DenzelReactBridge");
for (var i = 0; i < myElements.length; i++)
{
	// its the second child of the first child of that class.
	var child1=myElements[i].children[0];
	var child2=child1.children[1];
	child2.style.position = "absolute";
};

// "return" this text to the chrome plugin.
"Unl0gged you in."