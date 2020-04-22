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

/* California */
L.marker([36.987789, -119.7251616]).addTo(map)
	.bindPopup("<b>California</b>" +
				"<br>Ben Hoang" +
				"<br>Catherine Huang" +
				"<br>Simon Tao" +
				"<br>Josie Chou" +
				"<br>Charlotte Wong" +
				"<br>Kevin Yang" +
				"<br>Yejin Song" +
				"<br>Solomon Ge" +
				"<br>Karina Tseng" +
				"<br>Soda Hou" +
				"<br>Spencer Cha" +
				"<br>Sarah Tuan" +
				"<br>Josephine Chan" +
				"<br>Lacey" +
				"<br>Joey Vasconi" +
				"<br>Elijah Wen" +
				"<br>Aaron Miller" +
				"<br>Aaron Tu" +
				"<br>Adrian Pu" +
				"<br>Adrian Zaragoza" +
				"<br>Andrew Zhao" +
				"<br>Angela Tsang" +
				"<br>Claire Liu" +
				"<br>Coco Connor" +
				"<br>Crystal Cheng" +
				"<br>Justin Wahby " +
				"<br>Kaoruko Hayashi " +
				"<br>Munan Cheng" +
				"<br>Nathaniel Zhang" +
				"<br>Pablo Molano" +
				"<br>Qingping (Linda) Ye" +
				"<br>Roger Guo" +
				"<br>Roger Xia" +
				"<br>Ruiwen Ge" +
				"<br>Ryan Jia" +
				"<br>Ryan Sheng" +
				"<br>Vivian Wang" +
				"<br>Xiaodian"
				,{'minWidth':'150', 'maxHeight':'200'}
				);
				
/* Texas */
L.marker([31.9686, -99.9018]).addTo(map)
	.bindPopup("<b>Texas</b>" +
				"<br>Ami Kitajima" +
				"<br>Dylan Liu" +
				"<br>Esther Pham"				
				,{'minWidth':'150', 'maxHeight':'200'}
				);				
				
