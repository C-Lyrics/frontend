<?php

require_once __DIR__ . '/php-echonest-api-master/lib/EchoNest/Autoloader.php';

EchoNest_Autoloader::register();

class EchoNestConnection {
	private $apiKey;
	private $echonest;
	private $artistApi;
	private $songApi;

	public function __construct() {
		$this->apiKey = 'CNO6SCHHUHGU8RHST';
		$this->echonest = new EchoNest_Client();
		$this->echonest->authenticate($this->apiKey);
		$this->artistApi = $this->echonest->getArtistApi();
		$this->songApi = $this->echonest->getSongApi();
	}

	public function queryArtist($artist) {
		$results = $this->artistApi->search(array('name' => $artist));
		return $results;
	}

	public function querySongs($artist) {
		$results = $this->songApi->search(array(
			'artist' => $artist,
			'bucket' => 'audio_summary'
		));
		return $results;
	}

}

?>
