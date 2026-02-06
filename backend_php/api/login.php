<?php
// backend/api/login.php
include_once '../config/cors.php';
include_once '../config/database.php';
include_once '../models/User.php';
include_once '../utils/JWT.php';

$database = new Database();
$db = $database->getConnection();
$user = new User($db);

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->email) && !empty($data->password)){
    $user->email = $data->email;
    
    // Check if email exists and populate user object
    if($user->emailExists() && password_verify($data->password, $user->password)){
        
        $token_payload = [
            "iss" => "csms_backend",
            "aud" => "csms_users",
            "iat" => time(),
            "exp" => time() + (60 * 60), // 1 hour
            "data" => [
                "id" => $user->id,
                "email" => $user->email,
                "full_name" => $user->full_name,
                "role" => $user->role
            ]
        ];

        $jwt = JWT::encode($token_payload);

        http_response_code(200);
        echo json_encode(
            array(
                "message" => "Successful login.",
                "token" => $jwt,
                "user" => [
                    "email" => $user->email,
                    "full_name" => $user->full_name,
                    "role" => $user->role
                ]
            )
        );
    } else {
        http_response_code(401);
        echo json_encode(array("message" => "Login failed. Incorrect email or password."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Incomplete data."));
}
?>
