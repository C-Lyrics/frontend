<?php

require_once './EchoNest.php';

class EchoNestConnectionTest extends PHPUnit_Framework_TestCase {
    public function testQueryArtist() {
        $connection = new EchoNestConnection();
        $results = $connection->queryArtist('Capital Cities');

        $this->assertNotEmpty($results);
    }

    public function testQueryArtistSize() {
        $connection = new EchoNestConnection();
        $results = $connection->queryArtist('capital cities');

        $this->assertEquals(count($results), 4);
    }

    public function testQueryArtistError() {
        $connection = new EchoNestConnection();
        $results = $connection->queryArtist('ThisArtistDoesNotExist');

        $this->assertEquals(count($results), 0);
    }

    public function testGetApiKey() {
        $connection = new EchoNestConnection();
        $api = $connection->getApiKey();
        $this->assertNotEmpty($api);
    }

    public function testGetClient() {
        $connection = new EchoNestConnection();
        $client = $connection->getClient();
        $this->assertNotEmpty($client);
    }

    public function testGetArtistApi() {
        $connection = new EchoNestConnection();
        $artistApi = $connection->getArtistApi();
        $this->assertNotEmpty($artistApi);
    }
}