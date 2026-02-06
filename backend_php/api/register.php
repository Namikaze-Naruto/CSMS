<?php
// backend/api/register.php
include_once '../config/cors.php';
include_once '../config/database.php';
include_once '../models/User.php';

$database = new Database();
$db = $database->getConnection();
$user = new User($db);

$data = json_decode(file_get_contents("php://input"));

if(
    !empty($data->email) &&
    !empty($data->password) &&
    !empty($data->full_name) &&
    !empty($data->role)
){
    $user->email = $data->email;
    $user->full_name = $data->full_name;
    $user->role = $data->role;
    $user->password = password_hash($data->password, PASSWORD_BCRYPT);

    if($user->create()) {
        
        // Setup profile based on role (simplified for now)
        if ($user->role == 'student') {
            $query = "INSERT INTO student_profiles (user_id) VALUES (:uid)";
            $stmt = $db->prepare($query);
            $stmt->bindParam(":uid", $user->id);
            $stmt->execute();
        } elseif ($user->role == 'coordinator') {
             $query = "INSERT INTO coordinator_profiles (user_id) VALUES (:uid)";
             $stmt = $db->prepare($query);
             $stmt->bindParam(":uid", $user->id);
             $stmt->execute();
        }

        http_response_code(201);
        echo json_encode(array("message" => "User was created."));
    } else {
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create user."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Incomplete data."));
}
?>
