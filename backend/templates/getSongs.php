<?php 

require './WebScraper.php';

$webscraper = new WebScraper($artist);
$urls = $webscraper->getUrlList();
$lyrics = $webscraper->getLyrics($urls);

if(count($lyrics) == 0) {
    echo '{"error": 1)';
} else {
    echo json_encode($lyrics);
}

/*
//http://www.jacobward.co.uk/working-with-the-scraped-data-part-2/
function scrape_between($data, $start, $end){
    $data = stristr($data, $start); 
    $data = substr($data, strlen($start));  
    $stop = stripos($data, $end);   
    $data = substr($data, 0, $stop);    
    return $data; 
}


function curl($url) {
    // Assigning cURL options to an array
    $options = Array(
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_FOLLOWLOCATION => TRUE,
        CURLOPT_AUTOREFERER => TRUE, 
        CURLOPT_CONNECTTIMEOUT => 120,
        CURLOPT_TIMEOUT => 120,  
        CURLOPT_MAXREDIRS => 10, 
        CURLOPT_USERAGENT => "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1a2pre) Gecko/2008073000 Shredder/3.0a2pre ThunderBrowse/3.2.1.8", 
        CURLOPT_URL => $url, 
    );
         
    $ch = curl_init();  
    curl_setopt_array($ch, $options);   
    $data = curl_exec($ch); 
    curl_close($ch);    
    return $data;   
}

//adds a '+' instead of an empty space for url formatting
$newArtist = str_replace(" ", "+", $artist);
$defaultUrl = 'http://www.lyricsfreak.com';
$artistUrl = $defaultUrl . '/a/' . $newArtist . '/';

$scraped_page = curl($artistUrl);    // Downloading IMDB home page to variable $scraped_page
$scraped_data = scrape_between($scraped_page, '<table name="song" cellspacing="0">', "</table>");   
$separate_data = explode('<tr>', $scraped_data);
$urls = array();

foreach ($separate_data as $url) {
    $href = $defaultUrl . scrape_between($url, 'href="', '"');
    $title = scrape_between($url, 'title="', '"');
    if(strlen($href) != 0 && strlen($title) != 0){
        array_push($urls, [
            $title,
            $href
            ]); 
    }
    
}

$lyrics = array();

//goes through each lyrics page and takes the full lyrics
//stores the artist name, title of song, and lyrics as an array
//that array is then stored in $lyrics array
//when all song lyrics have been found, it will return the $lyrics array as a json file to the page
foreach ($urls as $url) {
    $dom = new DOMDocument();
    $dom->validateOnParse = true;
    @$dom->loadHTMLFile($url[1]);
    $data = $dom->getElementById("content_h");
    $words = $data->nodeValue;
    $words = preg_replace('/([a-z])([A-Z])/', '$1 $2', $words);
    array_push($lyrics, [
        $artist,
        $url[0],
        $words
        ]);
}

if(count($lyrics) == 0) {
    echo '{"error": 1}';
} else {
    echo json_encode($lyrics);    
}



*/

