# harmonyforhope.github.io

## Website for our organization

### Important! : using w3.css, leaflet.js, AirTable API

< link rel="stylesheet" href=" https://www.w3schools.com/w3css/4/w3.css ">

### Map Algorithm:
##### Google Sheets -> AirTable -> Map (Using AirTable API and leaflet.js)
##### Important map.js snippet:
```javascript
//VARS
var loc = {};

//ADDS NAMES TO STATE/COUNTRY STRING (AUTO)
function nameToLocation(name, location)
{
	var exist = false; var count = 0;
	var keys = Object.keys(loc);
	//console.log(name, location, loc, keys);
	for (var x=0; x<keys.length+1; x++)
	{
		if (location == keys[x]) { exist = true; }
		if (exist == true) { loc[location] = loc[location] + name; exist=false; break; }
	  else { count++; }
		if (count == keys.length+1) { loc[location] = name; }
	}
}
```
