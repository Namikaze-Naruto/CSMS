<?php
// backend/setup_db.php
require_once 'config/database.php';

$database = new Database();
$db = $database->getConnection();

$queries = [
    "CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        full_name TEXT NOT NULL,
        role TEXT NOT NULL, -- student, faculty, hod, coordinator
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )",
    "CREATE TABLE IF NOT EXISTS student_profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        department TEXT,
        enrollment_number TEXT UNIQUE,
        current_semester INTEGER,
        total_points INTEGER DEFAULT 0,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )",
    "CREATE TABLE IF NOT EXISTS faculty_profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        department TEXT,
        designation TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )",
    "CREATE TABLE IF NOT EXISTS coordinator_profiles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        department TEXT,
        is_co_coordinator INTEGER DEFAULT 0, -- Boolean 0/1
        FOREIGN KEY (user_id) REFERENCES users(id)
    )",
    "CREATE TABLE IF NOT EXISTS certificates (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        type TEXT NOT NULL,
        provider TEXT,
        file_url TEXT,
        status TEXT DEFAULT 'pending',
        points_awarded INTEGER DEFAULT 0,
        uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (student_id) REFERENCES student_profiles(id)
    )"
];

foreach ($queries as $query) {
    try {
        $db->exec($query);
        echo "Table created successfully.\n";
    } catch(PDOException $e) {
        echo "Error creating table: " . $e->getMessage() . "\n";
    }
}
echo "Database setup completed.";
?>
