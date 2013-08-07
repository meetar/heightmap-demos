heightmap-demos
===============

A series of demos showing ways of manipulating a heightmap.

scale.html – scale a displacement map

blur.html – blur and scale a displacement map, and adjusting the resolution of the base mesh

bezier.html - adjust the interpolation curve of a displacement map

dilate.html - apply a "dilate" morphological operator to a displacement map

erode.html - apply an "erode" morphological operator to a displacement map

combo.html - apply a dilate and erode to a displacement map, adjusting the diffuse shading of the map and the "overlay" of the original map.

Note: The heightmaps used in these demos (all based on SRTM_US_scaled_2048.jpg) are taken from the SRTM's plate carrée data and scaled horizontally to roughly match the width of a Mercator projection, for aesthetic purposes. As such, they are not suitable for use in any application which might have non-aesthetic import.
