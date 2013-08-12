// In console:

script = document.createElement("script")
script.type = 'text/javascript'
script.src = "http://d3js.org/d3.v3.min.js"
document.body.appendChild(script);

img = new Image
img.crossOrigin = "Anonymous";
img.src= "https://a.tiles.mapbox.com/v3/bmount.srtmsf/-122.4575,37.7575,14/500x500.png"
document.body.appendChild(img);

projection = d3.geo.mercator().center([-122.4575, 37.7575]).scale( Math.pow(2, 14) * 256 )
poi = projection.invert([250, 250])
// [-122.46064188701821, 37.75750000000001]
// that was a little off so we translate to center:
projection.translate([250,250])
poi = projection.invert([250, 250])
// more like it: [-122.45750000000001, 37.75750000000001]

canvas = document.createElement("canvas")
// <canvas>?..

// switch to d3, include both just to show what d3 is doing, remove previous:
d3.selectAll("canvas").remove()
canvas = d3.select("body").append("canvas").attr("id", "imagedata")
canvas.attr("height", 500).attr("width", 500)
ctx = canvas.node().getContext('2d')

topography = ctx.getImageData(0,0,500,500)
// ImageData {height: 500, width: 500, data: Uint8ClampedArray[1000000]}

// red value for center pixel:
// 2d array access -> 4 * 250 for x + y * (per row y entries)
topography.data[250 * 4 + (4 * 500) * 250]
1
// green value for center pixel:
topography.data[250 * 4 + (4 * 500) * 250 + 1]
19

/* Per the encoding, h = r * 255 + g + .01 * b
  That means the SRTM1 measurement for Twin Peaks (dark blob in middle) is 274m
  vs a known absolute max value of 281m. (there might be a better px too)

  Here below is the same type of interface to a nearby point starting with
  unprojected longitude and latitude:
*/

topoPx_nearby = projection([-122.45, 37.75])
// That lon/lat pair projected into pixelspace:
// [799.0331097207963, 944.4077101582661] --> oops that is out of bounds, tries:
topoPx_nearer = projection([-122.459, 37.756])
// good: [140.1933780554682, 388.8871734472923]
topography.data[topoPx_nearer[0] * 4 + (4 * 500) * topoPx_nearer[1]]
// undefined oops has to be integer index
topography.data[Math.floor(topoPx_nearer[0]) * 4 + (4 * 500) * Math.floor(topoPx_nearer[1])]
0
topography.data[Math.floor(topoPx_nearer[0]) * 4 + (4 * 500) * Math.floor(topoPx_nearer[1]) + 1]
237

/* So a little ways down the hill the elevation is 0 * 255 + 237 meters 
   I would love to do a national map like this. I would also like to try to interest the
   Mapbox satellite squad in a number of satellite layers like this, for example the 
   GRACE groundwater dataset
*/