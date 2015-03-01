<?php 

$e = new EchoNestConnection();

$artist = $name;

$results = $e->queryArtist($artist);
echo json_encode($results);


