unl0gin
a web browser extension (Chrome/FireFox)

Hide the login window on several sites.
	(click on the green button beneath the adress bar to hide the login popup.)

When you like what I've done here, you can give me some credit by giving me some credits.
Just send me all - or at least some - of your Bitcoins (BTC) to this adress:

1Jvn3ETyYbvLX2u4DndEFuytirx1DAb16K

Thank you very much.
>_ amarov / ben0bi

==========================================================================================

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
+ facebook.com (hide chat window and chat button)
+ pinterest.com

This script does not check for anything at all, 
it just overwrites the given values.

New 
0.1.1 -> 0.1.2
+ Removed some overhead.

0.0.1 -> 0.1.1
+ Works now with FireFox.
+ Url Pattern in manifest.json can call different js files. 
    They just have to have an unl0gin_siringe(tabs)-function.

+ No popup anymore.


I will do [extended] url check if there are more sites than pinterest.
