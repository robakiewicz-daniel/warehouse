<?php

class Database
{
    private $connection;

    function __construct()
    {
        $this->connection = new mysqli('127.0.0.1', 'root', '', 'warehouse');
        $this->connection->set_charset('utf8mb4');
        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }

    public function get()
    {
        return $this->connection;
    }
};