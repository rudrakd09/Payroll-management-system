<?php 
$page = "Profile Page"; 
$time = date("d-m-Y h:i:s A"); 
setcookie("last_page", $page, time() + 3600, "/"); 
setcookie("visit_time", $time, time() + 3600, "/"); 
?> 
<!DOCTYPE html> 
<html> 
<head> 
<title>User Activity Tracker</title> 
<!-- Bootstrap CDN --> 
<link 
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.mi
n.css" rel="stylesheet"> 
<link rel="stylesheet" href="style.css"> 
</head> 
<body class="d-flex justify-content-center align-items-center vh-100"> 
<div class="container"> 
    <div class="card shadow-lg"> 
        <div class="card-header bg-success text-white text-center"> 
            <h3>     Profile Page</h3> 
        </div> 
 
        <div class="card-body text-center"> 
            <p class="lead">Welcome to your profile</p> 
 
            <div class="activity-box"> 
                <h5>User Activity</h5> 
                <p id="activity" class="text-primary"></p> 
            </div> 
 
            <a href="page1.php" class="btn btn-outline-success mt-3"> 
                ← Back to Home 
            </a> 
        </div> 
 
        <div class="card-footer text-center text-muted"> 
            Real-Time Tracking Enabled 
        </div> 
    </div> 
</div> 
 
<script src="script.js"></script> 
</body> 
</html>