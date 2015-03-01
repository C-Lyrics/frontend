<?php

include_once 'simple_html_dom.php';

$defaultPage = "http://www.lyricsfreak.com";
$newArtist = str_replace(" ", "+", $artist);
$url = $defaultPage . "/" . 'a' . "/" . $newArtist . "/";

//Gets the list of song urls
//each song url will contain the lyrics for that song
function findSongUrls($urlPage) {
    $html = file_get_html($urlPage);
    $table = $html->find('table', 1);
    $songUrls = array();

    foreach($table->find('tr') as $row) {
        foreach($row->find('td[class=colfirst]') as $value) {
            foreach($value->find('a') as $link)
                array_push($songUrls, $link->href);
        }
    }

    return $songUrls;
}

//this is the part that takes too long
//it goes to every page returned by findSongUrls() and gets the lyrics from that page
//takes way too long for big artists
//will take around 15 seconds for an artist with 20 songs
//finding a free lyrics api would be best, but I can't find any, which is why i did it this way
function findLyrics($urlList, $defaultPage) {
    $lyrics = array();

    foreach($urlList as $url) {
        $songUrl = $defaultPage . $url;
        $songHtml = file_get_html($songUrl);
        foreach($songHtml->find('div[id=content_h]') as $div) {
            $string = $div->plaintext;
            array_push($lyrics, $string);
        }
    }

    return $lyrics;
}

$songs = findSongUrls($url);
$lyrics = findLyrics($songs, $defaultPage);

echo json_encode($lyrics);
