<?php
// backend/api/upload.php
include_once '../config/cors.php';
include_once '../config/database.php';
include_once '../utils/JWT.php';

$database = new Database();
$db = $database->getConnection();

// Basic Auth Check (In production, use a middleware helper)
$headers = getallheaders();
$jwt = isset($headers['Authorization']) ? str_replace('Bearer ', '', $headers['Authorization']) : "";
$user_data = JWT::decode($jwt);

if (!$user_data) {
    http_response_code(401);
    echo json_encode(["message" => "Unauthorized"]);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['file']) && isset($_POST['title'])) {
        $student_id = 1; // Retrieve actual profile ID from user_id using DB query
        
        $target_dir = "../uploads/";
        $target_file = $target_dir . basename($_FILES["file"]["name"]);
        
        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
            
            $query = "INSERT INTO certificates (student_id, title, type, provider, file_url, status) 
                      VALUES (:sid, :title, :type, :provider, :url, 'pending')";
            
            $stmt = $db->prepare($query);
            $stmt->bindParam(":sid", $student_id);
            $stmt->bindParam(":title", $_POST['title']);
            $stmt->bindParam(":type", $_POST['type']); // From form
            $stmt->bindParam(":provider", $_POST['provider']);
            $stmt->bindParam(":url", $target_file);
            
            if ($stmt->execute()) {
                echo json_encode(["message" => "File uploaded successfully"]);
            } else {
                echo json_encode(["message" => "DB Error"]);
            }
        } else {
            echo json_encode(["message" => "Error uploading file"]);
        }
    } else {
        echo json_encode(["message" => "No file uploaded"]);
    }
}
?>
