<?php


	$data = array();
	$data["returnedCode"] = 0;
	if ($_SERVER["REQUEST_METHOD"] === "POST") {
		$code = "";
		if (isset($_POST["code"])) $code = trim($_POST["code"]);
		if (isset($_GET["code"])) $code = trim($_GET["code"]);

		if ($code === "pandemonium") {
			$data["data"] = array();
			$i=0;
			
			$data["data"][$i]["id"] = 1;
    		$data["data"][$i]["title"] = "Computer";
    		$data["data"][$i]["author"] = "JY Martin";
    		$data["data"][$i]["body"] = "'I sell my old computer. 3 years old";
    		$data["data"][$i]["category_id"] = 1;
    		$data["data"][$i]["name"] = "electronics";
    		$i++;
			
			$data["data"][$i]["id"] = 2;
    		$data["data"][$i]["title"] = "Anime";
    		$data["data"][$i]["author"] = "JY Martin";
    		$data["data"][$i]["body"] = "'Looking for the end of the Fairy Tail manga ( > 126)";
    		$data["data"][$i]["category_id"] = 4;
    		$data["data"][$i]["name"] = "books";
    		$i++;
			
			$data["data"][$i]["id"] = 3;
    		$data["data"][$i]["title"] = "Elenium";
    		$data["data"][$i]["author"] = "JY Martin";
    		$data["data"][$i]["body"] = "'I am looking for the french version of the The Elenium series By David Eddings";
    		$data["data"][$i]["category_id"] = 4;
    		$data["data"][$i]["name"] = "books";
    		$i++;
			
			$data["data"][$i]["id"] = 4;
    		$data["data"][$i]["title"] = "Kinect";
    		$data["data"][$i]["author"] = "JM Normand";
    		$data["data"][$i]["body"] = "'I sell my new kinect that I can''t connect to my computer";
    		$data["data"][$i]["category_id"] = 1;
    		$data["data"][$i]["name"] = "electronics";
    		$i++;
			
			$data["data"][$i]["id"] = 5;
    		$data["data"][$i]["title"] = "Kikou";
    		$data["data"][$i]["author"] = "M Servieres";
    		$data["data"][$i]["body"] = "'My dog Kikou gave me plenty of little dogs, who wants one?";
    		$data["data"][$i]["category_id"] = 3;
    		$data["data"][$i]["name"] = "pets";
    		$i++;
			
			$data["data"][$i]["id"] = 6;
    		$data["data"][$i]["title"] = "Mangas";
    		$data["data"][$i]["author"] = "M Magnin";
    		$data["data"][$i]["body"] = "'I am looking for the first Alabator Mangas. Anyone get it?";
    		$data["data"][$i]["category_id"] = 4;
    		$data["data"][$i]["name"] = "books";
    		$i++;
    		
			$data["errorCode"] = 0;
			$data["returnedCode"] = 1;
		}
	}
	header('Content-Type: application/json');
	print json_encode($data);
?>
