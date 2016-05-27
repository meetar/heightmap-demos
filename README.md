heightmap-demos
===============

A series of demos showing ways of manipulating a heightmap in three.js.

![US heightmap in three.js](http://meetar.github.io/heightmap-demos/US_combo1.png)

http://meetar.github.io/heightmap-demos/scale.html - scale a displacement map

http://meetar.github.io/heightmap-demos/blur.html - blur and scale a displacement map, and adjust the resolution of the base mesh

http://meetar.github.io/heightmap-demos/bezier.html - adjust the interpolation curve of a displacement map

http://meetar.github.io/heightmap-demos/dilate.html - apply a "dilate" morphological operator to a displacement map

http://meetar.github.io/heightmap-demos/erode.html - apply an "erode" morphological operator to a displacement map

http://meetar.github.io/heightmap-demos/combo.html - apply "dilate" and "erode" to a displacement map, adjust the diffuse shading of the map and the "overlay" of the original map

http://meetar.github.io/heightmap-demos/adaptive.html - tie the erosion and scale values to the distance between the camera and the model - this keeps the largest mountains roughly the same size on the screen, independent of the zoom level

Note: The heightmaps used in these demos (all based on SRTM_US_scaled_2048.jpg) are taken from the SRTM's equirectangular data and scaled horizontally to roughly match the width of the equivalent Mercator, for aesthetic purposes. As such, they are not suitable for use in any application which might have non-aesthetic import.

https://github.com/meetar/globe-terrain - …And then I wrapped one of these around a sphere, because globe demo
