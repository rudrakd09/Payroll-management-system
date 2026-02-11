<?php 
$page = "Home Page"; 
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
        <div class="card-header bg-primary text-white text-center"> 
            <h3>      Real-Time User Activity Tracker</h3> 
        </div> 
 
        <div class="card-body text-center"> 
            <p class="lead">You are currently on <b>Home Page</b></p> 
 
            <div class="activity-box"> 
                <h5>User Activity</h5> 
                <p id="activity" class="text-success"></p> 
            </div> 
 
            <a href="page2.php" class="btn btn-outline-primary mt-3"> 
                Go to Profile Page → 
            </a> 
        </div> 
 
        <div class="card-footer text-center text-muted"> 
            Powered by PHP • Cookies • JavaScript 
        </div> 
    </div> 
</div> 
 
<script src="script.js"></script> 
</body> 
</html>