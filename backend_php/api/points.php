<?php
// backend/api/points.php
include_once '../config/cors.php';
include_once '../config/database.php';
include_once '../utils/JWT.php';

$database = new Database();
$db = $database->getConnection();

// Auth Check
$headers = getallheaders();
$jwt = isset($headers['Authorization']) ? str_replace('Bearer ', '', $headers['Authorization']) : "";
$user_data = JWT::decode($jwt);

if (!$user_data || $user_data['data']['role'] !== 'hod') {
    http_response_code(401);
    echo json_encode(["message" => "Unauthorized. HOD access required."]);
    exit();
}

// Handle GET (Fetch configs) or POST (Update configs)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // In a real DB, fetch from points_config table. 
    // Mocking response for now as per minimal viable setup.
    echo json_encode([
        ["id" => 1, "type" => "Certificate (Course)", "points" => 50],
        ["id" => 2, "type" => "Certificate (Internship)", "points" => 100],
        ["id" => 3, "type" => "Project (Hackathon)", "points" => 150],
        ["id" => 4, "type" => "Research Paper", "points" => 200]
    ]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    // Update logic here...
    echo json_encode(["message" => "Points configuration updated successfully"]);
}
?>
