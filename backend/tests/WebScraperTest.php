<?php 

//require './WebScraper.php';

class WebScraperTest extends PHPUnit_Framework_TestCase {

	public function testGetArtist() {
		$scraper = new WebScraper('Capital Cities');
		$artist = $scraper->getArtist();

		$this->assertEquals($artist, 'Capital Cities');
	}

	public function testGetUrlList() {
		$scraper = new WebScraper('Capital Cities');
		$urls = $scraper->getUrlList();

		$this->assertNotEmpty($urls);
	}

	public function testGetUrlListSize() {
		$scraper = new WebScraper('Capital Cities');
		$urls = $scraper->getUrlList();

		$this->assertEquals(count($urls), 14);
	}

	public function testGetUrlListEmpty() {
		$scraper = new WebScraper('');
		$urls = $scraper->getUrlList();

		$this->assertEquals(count($urls), 0);
	}

	public function testGetUrlListFaultyInput() {
		$scraper = new WebScraper('ArtistDoesNotExist');
		$urls = $scraper->getUrlList();

		$this->assertEquals(count($urls), 0);
	}

	public function testGetLyrics() {
		$scraper = new WebScraper('Capital Cities');
		$urls = $scraper->getUrlList();
		$lyrics = $scraper->getLyrics($urls);

		$this->assertNotEmpty($lyrics);
		$this->assertEquals(count($lyrics), 14);
	}

	public function testGetLyricsFaultyInput() {
		$scraper = new WebScraper('ArtistDoesNotExist');
		$urls = $scraper->getUrlList();
		$lyrics = $scraper->getLyrics($urls);

		$this->assertEquals(count($lyrics), 0);
	}

	public function testGetLyricsEmpty() {
		$scraper = new WebScraper('');
		$urls = $scraper->getUrlList();
		$lyrics = $scraper->getLyrics($urls);

		$this->assertEquals(count($lyrics), 0);
	}

	public function testScrapeBetween() {
		$scraper = new WebScraper('Calvin Harris');
		$string = '<!DOCTYPE html><html><head></head><body><p id="5">Hello</p></body></html>';
		$scrapedData = $scraper->scrape_between($string, '<p id="5">', '</p>');
		$this->assertEquals($scrapedData, 'Hello');
	}
}