<?php 

$e = new EchoNestConnection();

$artist = $name;

$results = $e->queryArtist($artist);

if(count($results) == 0) {
	echo '{"error": 1}';
} else {
	echo json_encode($results);	
}



