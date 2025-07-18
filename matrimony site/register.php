<?php
// DB connection
$host = "localhost";
$user = "root";        // change if not using XAMPP
$pass = "";            // change if needed
$dbname = "matrimony_db";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get POST data
$username = $_POST['username'] ?? '';
$email = $_POST['email'] ?? '';
$password = $_POST['password'] ?? '';

// Simple validation
if (empty($username) || empty($password)) {
  die("Please fill in all required fields.");
}

// Hash password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Insert into DB
$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $username, $email, $hashedPassword);

if ($stmt->execute()) {
  echo "User registered successfully!";
} else {
  echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
