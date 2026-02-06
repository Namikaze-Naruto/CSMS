<?php
// backend/config/database.php

class Database {
    private $host = "localhost";
    private $db_name = "csms_db";
    private $username = "postgres";
    private $password = "password";
    public $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            // Using SQLite for standalone demo purposes. 
            // To use PostgreSQL, uncomment the line below and configure credentials.
            // $this->conn = new PDO("pgsql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            
            $this->conn = new PDO("sqlite:" . __DIR__ . "/../../csms.db");
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>
