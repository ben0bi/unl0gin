unl0gin
a web browser extension (Chrome/FireFox)

>_ amarov

Hide the login window on several sites.
	(click on the green button beneath the adress bar to hide the login popup.)

Chrome:
	goto: chrome://extensions
	check the debug checker.
	click on "Load uncompiled" or such.
	load the directory.
	
	It gives a warning. Fuck that. It's from the FireFox config.
	
FireFox:
	goto: about:debugging
	check the debug checker
	click on load (see above)
	load the manifest.json
	
Working with:
+ pinterest.com

This script does not check for anything at all, 
it just overwrites the given values.

New 0.0.1 -> 0.1.1
+ Works now with FireFox.
+ Url Pattern in manifest.json can call different js files. They just have to have an unl0gin_siringe()-function.
+ No popup anymore.


I will do [extended] url check if there are more sites than pinterest.