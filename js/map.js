//CREATE MAP USING LEAFLET.JS
var map = L.map('map').setView([20, -30], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	minZoom: 2,
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1
}).addTo(map);

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

//ACCESS AIRTABLE API (GET DATA FROM AIRTABLE SPREADSHEET)
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyQ7YUX3SUECVL4C'}).base('appSmUKDnFdEAT1YF');

base('Members').select({
  view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
	//Fill arrays with data from spreadsheet
  records.forEach(function(record) {
		nameToLocation(record.get('parsedName'), record.get('parsedLocation'));
  });

  //ADD MAPS BY STATE/COUNTRY (ONLY MANUALLY FOR NOW)
	L.marker([36.987789, -119.7251616]).addTo(map).bindPopup("<b>California</b>"+loc.CA, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([31.9686, -99.9018]).addTo(map).bindPopup("<b>Texas</b>"+loc.TX, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([-0.023559, 37.9061928]).addTo(map).bindPopup("<b>Kenya</b>"+loc.Kenya, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([41.2033216,  -77.1945247]).addTo(map).bindPopup("<b>Pennsylvania</b>"+loc.PA, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([39.0457549, -76.6412712]).addTo(map).bindPopup("<b>Maryland</b>"+loc.MD, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([37.9642529, -91.8318334]).addTo(map).bindPopup("<b>Missouri</b>"+loc.MO, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([40.7127753, -74.0059728]).addTo(map).bindPopup("<b>New York</b>"+loc.NY, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([40.0583238, -74.4056612]).addTo(map).bindPopup("<b>New Jersey</b>"+loc.NJ, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([32.1656221, -82.9000751]).addTo(map).bindPopup("<b>Georgia</b>"+loc.GA, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([38.9071923, -77.0368707]).addTo(map).bindPopup("<b>Washington DC</b>"+loc["Washington D.C."], {'minWidth':'150', 'maxHeight':'200'});
	L.marker([37.4315734, -78.6568942]).addTo(map).bindPopup("<b>Virginia</b>"+loc.VA, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([35.7595731, -79.0192997]).addTo(map).bindPopup("<b>North Carolina</b>"+loc.NC, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([40.6331249, -89.3985283]).addTo(map).bindPopup("<b>Illinois</b>"+loc.IL, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([27.6648274, -81.5157535]).addTo(map).bindPopup("<b>Florida</b>"+loc.FL, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([33.836081, -81.1637245]).addTo(map).bindPopup("<b>South Carolina</b>"+loc.SC, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([46.729553, -94.6858998]).addTo(map).bindPopup("<b>Minnesota</b>"+loc.MN, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([44.182205, -84.506836]).addTo(map).bindPopup("<b>Michigan</b>"+loc.MI, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([42.4072107, -71.3824374]).addTo(map).bindPopup("<b>Massachusetts</b>"+loc.MA, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([32.523309, -89.710361]).addTo(map).bindPopup("<b>Mississippi</b>"+loc.MS, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([47.7510741, -120.7401385]).addTo(map).bindPopup("<b>Washington</b>"+loc.WA, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([34.0489281, -111.0937311]).addTo(map).bindPopup("<b>Arizona</b>"+loc.AZ, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([40.4172871, -82.907123]).addTo(map).bindPopup("<b>Ohio</b>"+loc.OH, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([35.5174913, -86.5804473]).addTo(map).bindPopup("<b>Tennessee</b>"+loc.TN, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([51.253775, -85.323214]).addTo(map).bindPopup("<b>Ontario</b>"+loc.Ontario, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([36.2048225, 138.2529297]).addTo(map).bindPopup("<b>Japan</b>"+loc.Japan, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([35.9077568, 127.766922]).addTo(map).bindPopup("<b>South Korea</b>"+loc["South Korea"], {'minWidth':'150', 'maxHeight':'200'});
	L.marker([35.486703, 101.901875]).addTo(map).bindPopup("<b>China</b>"+loc.China, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([41.294856, -4.055685]).addTo(map).bindPopup("<b>Spain</b>"+loc.Spain, {'minWidth':'150', 'maxHeight':'200'});
	L.marker([4.1156735, -72.9301367]).addTo(map).bindPopup("<b>Colombia</b>"+loc.Colombia, {'minWidth':'150', 'maxHeight':'200'});

  fetchNextPage();

}, function done(err) {
  	if (err) { console.error(err); return; }
});
