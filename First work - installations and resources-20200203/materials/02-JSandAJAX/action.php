<?php

function getMyData($dataName, & $data) {
	$myData = "";
	if (isset($_POST[$dataName])) {
		$myData = $_POST[$dataName];
	} else if ($dataName == "category") {
		$myData = -1;
	} else if ($data["errorCode"] == 0) {
		$data["errorCode"] = 2;
		$data["errorMsg"] = "Invalid data ".$dataName;
	}
	return $myData;
}


$data = array();
$data["errorCode"] = 0;
$data["errorMsg"] = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$id = rand(1, 2000);
	$title = getMyData("title", $data);
	$author = getMyData("author", $data);
	$body = getMyData("body", $data);
	$categoryID = getMyData("category", $data);

	$categories = array("", "electronics", "appartment", "pets", "books", "smartphone");
	if ($categoryID == "") $categoryID = 0;

	$categoryName = "";
	if (isset($categories[$categoryID])) $categoryName = $categories[$categoryID];

	$data["id"] = $id;
	$data["title"] = $title;
	$data["author"] = $author;
	$data["body"] = $body;
	$data["categoryName"] = $categoryName;
} else {
	$data["errorCode"] = 1;
	$data["errorMsg"] = "Not a POST request";
}

header('Content-Type: application/json');
print json_encode($data);
?>