# STNEventApp
**Template for single event application for declared event in STN**

## Update, 2018-02-16: Deprecated 
### This repo has been  [is part of a discontinued effort] and is no longer being actively maintained.


STN Event Application Standup Procedure

1. Application code the STN single event application is maintained on the USGS-WiM repository on github. Make clone of code on repo to local dev environment. Clone URL: https://github.com/USGS-WiM/STNEventApp.git

2. In src folder, a few variables need to be updated to specify the declared event:

	**index.html**
	line 5, title tag needs to be updated to declared event name


	**core.js**
	lines 45-48, there are two broadly applicable center properties in the map constructor, one of which is commented out: one for east coast landfall, the other for Gulf of Mexico. Select the appropriate one, or customize based on better information.


	**layers.js**
	line 5, eventName variable needs to be updated to declared event name (it is critical this string matches the event name, as this is the variable used to define layer definitions on all the sensor layers)
	line 7, eventType variable needs to be updated to declared event type. Currently, the only valid one would be “Hurricane”. If not a hurricane, leave string empty. “Tropical Storm” is a possibility, though not an official event type in the STN DB. Check with Marie on this.

	**Optional edits**
	Line 9, mapServicesRoot variable should not need to change but is available if there is a change to the services location
	Line 11, stnDomain variable should not need to change but is available if there is a change to the STN web server domain

3. run ‘gulp build’ to create build folder with updated variables

4. Upload build folder contents to the “event” folder in the ‘stn.wim.usgs.gov ‘ S3 bucket

5. RDP into STN Web production EC2 instance, navigate to C:\inetpub\wwwroot folder and rename the folder called “event” to the declared event name. The reverse proxy settings on that folder will handle redirecting the user to the “event” folder in the S3 bucket.

Note: Alternatively, you can create a new folder on the server and a new folder in S3 to contain the code, but you will need to recreate the reverse proxy and trailing slash rules from the “event” folder on the new folder on STN web server.
