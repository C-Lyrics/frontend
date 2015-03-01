<?php
require __DIR__ . '/EchoNest.php';
require  __DIR__ . '/vendor/autoload.php';
use Slim\Slim;


$app = new Slim([
	'templates.path' => './templates'
]);

$app->view()->setTemplatesDirectory('./templates');

$app->get('/getArtists/:name', function($name) use ($app){
	$app->render('getArtists.php', ['name' => $name]);
});

$app->get('/getSongs/:artist', function($artist) use ($app){
	$app->render('getSongs.php', ['artist' => $artist]);
});

$app->run();
