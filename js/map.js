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
				"<br>Aaron Miller" +
				"<br>Aaron Tu" +
				"<br>Adrian Pu" +
				"<br>Adrian Zaragoza" +
				"<br>Andrew Yin" +
				"<br>Andrew Zhao" +
				"<br>Angela Tsang" +
				"<br>Ben Hoang" +
				"<br>Catherine Huang" +
				"<br>Charlotte Wong" +
				"<br>Cindy Yan" +
				"<br>Claire Liu" +
				"<br>Coco Connor" +
				"<br>Crystal Cheng" +
				"<br>Daniel Mah" +
				"<br>Elijah Wen" +
				"<br>Eric Yan" +
				"<br>Hannah Lin" +
				"<br>Jeston Lu" +
				"<br>Jocelyn Horng" +
				"<br>Joey Vasconi" +
				"<br>Joey Vasconi" +
				"<br>Jonathan Wang Hou" +
				"<br>Josephine Chan" +
				"<br>Josie Chou" +
				"<br>Justin Wahby " +
				"<br>Kaoruko Hayashi " +
				"<br>Karina Tseng" +
				"<br>Kevin Yang" +
				"<br>Lacey" +
				"<br>Leslie Jin" +
				"<br>Lukasz Yoder" +
				"<br>Munan Cheng" +
				"<br>Nancy Zheng" +
				"<br>Nathaniel Zhang" +
				"<br>Ophir Horovitz" +
				"<br>Pablo Molano" +
				"<br>Parker Van Ostrand" +
				"<br>Qingping (Linda) Ye" +
				"<br>Rebecca Tseng" +
				"<br>Riley Kong" +
				"<br>Roger Guo" +
				"<br>Roger Xia" +
				"<br>Ruiwen Ge" +
				"<br>Ryan Jia" +
				"<br>Ryan Sheng" +
				"<br>Ryan Wang" +
				"<br>Sarah Tuan" +
				"<br>Simon Tao" +
				"<br>Soda Hou" +
				"<br>Solomon Ge" +
				"<br>Soorya Kuppam" +
				"<br>Spencer Cha" +
				"<br>Vivian Wang" +			
				"<br>Xiaodian" +
				"<br>Xinran Shi" +
				"<br>Yejin Song"
				,{'minWidth':'150', 'maxHeight':'200'}
				);
				
/* Texas */
L.marker([31.9686, -99.9018]).addTo(map)
	.bindPopup("<b>Texas</b>" +
				"<br>Ami Kitajima" +
				"<br>Dylan Liu" +
				"<br>Esther Pham" +
		   		"<br>Laurel Engelhardt"
				,{'minWidth':'150', 'maxHeight':'200'}
				);				
				
/* Kenya */
L.marker([-0.023559, 37.9061928]).addTo(map)
	.bindPopup("<b>Kenya</b>" +
				"<br>Aaron Agola Jaoko"			
				,{'minWidth':'150', 'maxHeight':'200'}
				);	

/* PA */
L.marker([41.2033216, -77.1945247]).addTo(map)
	.bindPopup("<b>Pennsylvania</b>" +
				"<br>Addison Liu" +
				"<br>Christian Chiu" +
				"<br>Erica Clarke" +
				"<br>Katie Liu" +
				"<br>Nicholas Han"
				,{'minWidth':'150', 'maxHeight':'200'}
				);	

/* MD */
L.marker([39.0457549, -76.6412712]).addTo(map)
	.bindPopup("<b>Maryland</b>" +
				"<br>Alena Lu" +
				"<br>Elizabeth Qiu" +
				"<br>Nadine Meister"
				,{'minWidth':'150', 'maxHeight':'200'}
				);	

/* Missouri */
L.marker([37.9642529, -91.8318334]).addTo(map)
	.bindPopup("<b>Missouri</b>" +
				"<br>Alex Chen" +
				"<br>Jason Ziren Zhao"
				,{'minWidth':'150', 'maxHeight':'200'}
				);	

/* NY */
L.marker([40.7127753, -74.0059728]).addTo(map)
	.bindPopup("<b>New York</b>" +
				"<br>Alex Nam" +
				"<br>Ayane Nakajima" +
				"<br>Benjamin T. Rossen" +
				"<br>Caroline Hsu" +
				"<br>Faith Chen" +
				"<br>Julia Kim" +
				"<br>Lucas Amory" +
				"<br>Matthew Chen" +
				"<br>Riley Barker"
				,{'minWidth':'150', 'maxHeight':'200'}
				);	

/* NJ */
L.marker([40.0583238, -74.4056612]).addTo(map)
	.bindPopup("<b>New Jersey</b>" +
				"<br>Elizabeth Yang" +
				"<br>Felicia He" +
				"<br>Jenna Cooley" +
				"<br>Steven Cui"
				,{'minWidth':'150', 'maxHeight':'200'}
				);				

/* GA */
L.marker([32.1656221, -82.9000751]).addTo(map)
	.bindPopup("<b>Georgia</b>" +
				"<br>Alice Zhang" +
				"<br>Charlie Li" +
				"<br>Grace Peng" +
				"<br>Skyler Feng" +
				"<br>Yannie Tan"
				,{'minWidth':'150', 'maxHeight':'200'}
				);	
				
/* WA DC */
L.marker([38.9071923, -77.0368707]).addTo(map)
	.bindPopup("<b>Washington DC</b>" +
				"<br>Son Duong"
				,{'minWidth':'150', 'maxHeight':'200'}
				);				

/* VA */
L.marker([37.4315734, -78.6568942]).addTo(map)
	.bindPopup("<b>Virginia</b>" +
				"<br>Andrew Wu" +
				"<br>Hana Wang"
				,{'minWidth':'150', 'maxHeight':'200'}
				);				
							
/* NC */
L.marker([35.7595731, -79.0192997]).addTo(map)
	.bindPopup("<b>North Carolina</b>" +
				"<br>Andy Dai" +
				"<br>Gabriel Crist" +
				"<br>Will Aarons"
				,{'minWidth':'150', 'maxHeight':'200'}
				);
				
/* IL */
L.marker([40.6331249, -89.3985283]).addTo(map)
	.bindPopup("<b>Illinois</b>" +
				"<br>Erin Yuan"			
				,{'minWidth':'150', 'maxHeight':'200'}
				);	

/* FL */
L.marker([27.6648274, -81.5157535]).addTo(map)
	.bindPopup("<b>Florida</b>" +
				"<br>Giancarlo Llerena"			
				,{'minWidth':'150', 'maxHeight':'200'}
				);					
				
/* SC */
L.marker([33.836081, -81.1637245]).addTo(map)
	.bindPopup("<b>South Carolina</b>" +
				"<br>Caleb Borick" +
				"<br>Lauren Chen"
				,{'minWidth':'150', 'maxHeight':'200'}
				);				
				
/* MN */
L.marker([46.729553, -94.6858998]).addTo(map)
	.bindPopup("<b>Minnesota</b>" +
				"<br>Aurora Wang"			
				,{'minWidth':'150', 'maxHeight':'200'}
				);	

/* MA */
L.marker([42.4072107, -71.3824374]).addTo(map)
	.bindPopup("<b>Massachusetts</b>" +
				"<br>Darryl Therrien" +
				"<br>Rebekah Hong" +
				"<br>Theo Teng"
				,{'minWidth':'150', 'maxHeight':'200'}
				);	

/* WA */
L.marker([47.7510741, -120.7401385]).addTo(map)
	.bindPopup("<b>Washington</b>" +
				"<br>Deanna Han" +
				"<br>Emily Jeeho Park" +
				"<br>Jenna Tu" +
				"<br>Quennie Nguyen" +
		   		"<br>Nicole Wang"
				,{'minWidth':'150', 'maxHeight':'200'}
				);		

/* AZ */
L.marker([34.0489281, -111.0937311]).addTo(map)
	.bindPopup("<b>Arizona</b>" +
				"<br>Jessica Zhang" +
				"<br>Jessica Zhang"
				,{'minWidth':'150', 'maxHeight':'200'}
				);

/* Ohio */
L.marker([40.4172871, -82.907123]).addTo(map)
	.bindPopup("<b>Ohio</b>" +
				"<br>Kasey Shao" +
				"<br>Risa Chen" +
				"<br>Sophia Suwiryo"
				,{'minWidth':'150', 'maxHeight':'200'}
				);	

/* TN */
L.marker([35.5174913, -86.5804473]).addTo(map)
	.bindPopup("<b>Tennessee</b>" +
				"<br>Sophie Tan"
				,{'minWidth':'150', 'maxHeight':'200'}
				);	

/* Ontario */
L.marker([51.253775, -85.323214]).addTo(map)
	.bindPopup("<b>Ontario</b>" +
				"<br>Vanessa Yu"
				,{'minWidth':'150', 'maxHeight':'200'}
				);					

/* Japan */
L.marker([36.2048225, 138.2529297]).addTo(map)
	.bindPopup("<b>Japan</b>" +
				"<br>Kaki Su"			
				,{'minWidth':'150', 'maxHeight':'200'}
				);						

/* South Korea */
L.marker([35.9077568, 127.766922]).addTo(map)
	.bindPopup("<b>South Korea</b>" +
				"<br>Ben Kim"			
				,{'minWidth':'150', 'maxHeight':'200'}
				);

/* China */
L.marker([35.486703, 101.901875]).addTo(map)
	.bindPopup("<b>China</b>" +
				"<br>Freya Ou"			
				,{'minWidth':'150', 'maxHeight':'200'}
				);
							
$(window).on("resize", function() {
    $("#map").height($(window).height()).width($(window).width());
    map.invalidateSize();
}).trigger("resize");				
