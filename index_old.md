<!DOCTYPE html>
<html lang="en">
<head>
<title>H.O.P.E</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

body
{
  font-family: "Comic Sans MS", cursive, sans-serif;
  margin: 0;
}

.header
{
  padding: 15px;
  text-align: center;
  background: #ddd;
  color: black;
}

.navbar
{
  /* Prevent navbar from breaking in mobile */
  overflow: hidden;
  background-color: #333;
}

.navbar a
{
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

.navbar a:hover
{
  background-color: #ddd;
  color: black;
}

.row
{  
  display: flex;
  flex-wrap: wrap;
}

.side
{
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

.main
{   
  flex: 70%;
  background-color: white;
  padding: 20px;
}

img
{
  display: inline-block;
}

.footer
{
  padding: 20px;
  text-align: center;
  background: #ddd;
}

@media screen and (max-width: 700px)
{
  .row {   
    flex-direction: column;
  }
}

@media screen and (max-width: 400px)
{
  .navbar a
  {
    float: none;
    width:100%;
  }
}

.center
{
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>
</head>
<body>

<div class="header">
  <img src="txhb6t8.png" alt="Logo" /*height="200" width="800"*/ style="max-width:100%;" class="responsive"/>
</div>

<div class="navbar">
  <a href="https://www.facebook.com/harmonyforhope2020/" target="_blank">Facebook</a>
  <a href="https://www.instagram.com/harmonyforhope/" target="_blank">Instagram</a>
  <a href="https://www.youtube.com/channel/UC-3WBS1_l62ttDnySzowL_w" target="_blank">Youtube</a>
</div>

<div class="row">
  <div class="side">
    <img src="a0r3WDF.png" alt="topLogo" /*height="420" width="420"*/ class="center" style="max-width:100%;">
  </div>
  <div class="main">
    <h2>Pianism has been considered a solitary discipline.</h2>
	<h2>However, we believe in the contrary, as pianists have united around the world, producing creative collaborative projects.</h2>
	<h2>Amidst difficult times, we hope our community of musicians can spread joy to yours.</h2>
	<button onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')">CLICK</button>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</div>

<div class="footer">
  <img src="FeVOxI9.png" alt="bottomLogo" /*height="100" width="210"*/ class="center" >
</div>

</body>
</html>