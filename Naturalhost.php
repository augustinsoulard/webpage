<!DOCTYPE html> <!-- Code réalisé par Augustin Soulard-->

<html>

<head>

	<?php include "base/head.php";?>

</head>

<body>

	<?php include "base/nav.php";?>

<?php if(isset($_GET['var']))

{

	$var = $_GET['var'];

}

else 

{

	$var = "0";

}

	

	switch ($var) { 

///////////////////////////////////////Naturalhost

		case 1: include ('annelides.html'); 

		break; 

		case 2: include ('arthropodes.php'); 

		break; 

		case 3: include ('bota.php'); 

		break;

		case 4: include ('champignons.html'); 

		break; 

		case 5: include ('lichens.html'); 

		break; 

		case 6: include ('oiseaux.html'); 

		break; 

		case 7: include ('RA.html'); 

		break; 

		case 8: include ('plancton.php'); 

		break; 

		case "poissons": include ('poissons.php'); 

		break; 

		case 9: include ('independants.html'); 

		break;

		case "mammiferes": include ('mammiferes.html'); 

		break;

		case 10: include ('oel.html'); 

		break; 

		case 11: include ('regions.html'); 

		break;

		case "sp": include ('sp.html'); 

		break; 

///////////////////////////////////////Arthropodes

		case "arachnides": include ('arthropodes/arachnides.html'); 

		break; 

		case "dipteres": include ('arthropodes/dipteres.html'); 

		break;

		case "coleopteres": include ('arthropodes/coleopteres.html'); 

		break; 

		case "carabides": include ('arthropodes/carabides.html'); 

		break; 

		case "hemipteres": include ('arthropodes/hemipteres.html'); 

		break; 

		case "hymenopteres": include ('arthropodes/hymenopteres.html'); 

		break; 

		case "lepidopteres": include ('arthropodes/lepidopteres.html'); 

		break; 

		case "autres": include ('arthropodes/autres.html'); 

		break;

///////////////////////////////////////Botanique

		case "bryophytes": include ('bota/bryophytes.html'); 

		break; 

		case "orchidees": include ('bota/orchidees.html'); 

		break;

///////////////////////////////////////Planctons

		case "phytoplanctons": include ('planctons/phytoplanctons.html'); 

		break; 

		case "zooplanctons": include ('planctons/zooplanctons.html'); 

		break;

////////////////////////////////////BaseContent

		default: include ('baseContent.html');

		break;

	}

?>



<footer><?php include "base/footer.php";?></footer>

</body>

</html>