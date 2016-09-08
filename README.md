# AOT and Form Control build bug
> If you have a lot of form controls in template and compile with AOT,
webpack build will hang for a long time or seemingly never complete.

To demo the bug, just clone the github repo and run `npm i` to install. 
To compile and build files, run `npm run compile`. 
To create a normal build without ngc, just use `npm run build`. 
To start server, use `npm run prodserver`.
 
I have 20 form controls on it right now, so it should take about 2 minutes to build. 
If you delete 5 of them, it should build after compile in about 12 seconds. 
If you put it to 30 controls, it should hang for an extremely long time or never complete.
