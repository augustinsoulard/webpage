<!DOCTYPE html> <!-- Code réalisé par Augustin Soulard-->

<html>

<head>

	<?php include "base/head.php";?>

	<style type="text/css">body{

	background-color: #ddd;

}

header {

		background-color: #557a55;

}

footer {

	background-color: #557a55;

	text-align: center;

	font-size: 20px;

	margin-top:30px;

	margin-bottom:0px;

}

footer:hover{

	padding:5px;

}



footer a:hover {

border-radius: 1em;

background-color:#000;

padding:5px;

}





h1{

	font-size: 55px;

	color:#fff;

	text-align: center;

}

h2{

	font-size: 38px;

}

h3{

	font-size: 30px;

}

a {

  outline: none;

  padding: 2px 1px 0;

  text-decoration: none;

  color:#fff;

}

a.cot{

	font-size: 40px;

	color:#557a55;

	text-decoration: none;

}

a:link {

  color: #fff;

}



p{

	font-size: 40px;

	color:#557a55;

	text-align:center;

}

p.remerciements{

	font-size: 20px;

}

a.remerlien{

	font-size: 20px;

	color:#557a55;

}

a.remerlien:hover{

	text-decoration: underline;

}

strong{

	text-decoration: underline;

}



img{

	display: block;

    margin-left: auto;

    margin-right: auto;

}

div.baseContent{

	display:block;

	margin:50px;

}

div.inline{

	text-align: center;

	display:inline-block;

	margin:0 auto;

	width:33%;



}

a.press{

	width:33%;

	color:#fff;

	background-color: #557a55;

	border-width: 3px;

	border-color:#ddd;

	font-size: 30px;

	text-align: center;

	margin: 0 auto;

	padding: 12px;

	border-style: solid;

	border-radius:1em;

}

a.press:hover

{

	background-color: #111;

	border-color:#888;

	transition:0.5s background-color;

	transition:0.5s border-style;

	transition: 0.2s padding;

	border-width: 3px;

	border-style: dotted;

	padding:17px;

	font-weight: bold;

}

a.press:active

{

	background-color: #111;

	border-color:#888;

	transition:0.5s background-color;

	transition:0.5s border-style;

	transition: 0.2s padding;

	border-width: 3px;

	border-style: dotted;

	padding:20px;

	font-weight: bold;

	opacity:50%;

}

li.simplex{

	list-style-type: none;



}

li.simplex a{

	background-color:#557a55;

	padding:5px;

	border-radius:1em;



}

li.simplex a:hover{

	background-color:#000;

	padding:7px;

	border-radius:1em;

	opacity:100%;

}

li.simplex a:active{

	background-color:#000;

	padding:7px;

	border-radius:1em;

	opacity:50%;



}</style>

</head>

<body>

	<?php include "base/nav.php";?>

<header>

	<h1>Mes projets</h1>

</header>

<h2>Professionnels</h2>

<ul>

	<li class="simplex">

		<a href="https://drive.google.com/file/d/13ri4rlyg9RQdYvvrNdD4Vra7g8vl0NZg/view?usp=sharing" target="_blank">Poster projet "Permaculture et Biodiversité"</a>

	</li>

	<br />

	<li class="simplex">

		<a href="https://drive.google.com/file/d/17qnLbd9PYHncbRypQA14Gj0XsYjecf7P/view?usp=sharing" target="_blank">Rapport de stage M1</a>

	</li>

	<br />
	<li class="simplex">

		<a href="https://drive.google.com/file/d/1Pee8Jwi611snGarce9j_4d_cmT4wYYmj/view?usp=sharing" target="_blank">Synthèse bibliographique : Impacts des plantes invasives sur les services écosystémiques liés aux agrosystèmes (avec Nicolas Bastide et Ludovic Lagneau)</a>

	</li>

	<br />

	<li class="simplex">

		<a href="https://gitlab.com/Syafu/augupack.git" target="_blank">AuguPack (Package R)</a>

	</li>

	<br />

	<li class="simplex">

		<a href="https://www.xper3.fr/xper3GeneratedFiles/publish/identification/1903762863569193955/mkey.html" target="_blank">Clef d'identification du zooplancton de Grand-Lieu</a>

	</li>

	<br />



</ul>

<h2>Loisirs</h2>

<ul>

	<li class="simplex">

		<a href="https://augustin-soulard.000webhostapp.com/Final_game_L.Lagneau_A.Soulard/Final_task_game_launcher.html" target="_blank">Projet jeu d'anglais avec Ludovic Lagneau</a>

	</li>

	<br />

	<li class="simplex">

		<a href="https://pytt.itch.io/resyk" target="_blank">Resyk (co-auteur)</a>

	</li>

	<br />

</ul>

<footer><?php include "base/footer.php";?></footer>

</body>

</html>