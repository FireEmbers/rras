#Resample, aspect and slope

Resamples a 2D array with height data and computes aspect and slope, storing them in 2D arrays.

##Usage

`var rras = require('rras');`

###Resampling an array

`var heightResampled = rras.resample(heightOriginal, rows, cols);`


###Computing aspect

`var aspectArray = rras.aspect(heightResampled);`

###Computing slope

`var slopeArray = rras.slope(heightResampled);`

##Algorithm links

resampling

http://stackoverflow.com/questions/7809345/html5-canvas-is-there-a-way-to-resize-image-with-nearest-neighbour-resampling

http://webhelp.esri.com/arcgisdesktop/9.2/index.cfm?TopicName=How%20Slope%20works

aspect and slope

http://webhelp.esri.com/arcgisdesktop/9.2/index.cfm?TopicName=How%20Slope%20works

http://webhelp.esri.com/arcgisdesktop/9.2/index.cfm?TopicName=How%20Aspect%20works



