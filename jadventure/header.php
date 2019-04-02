<!DOCTYPE html>
<html>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="icon" href="images/favicon.ico"/>
	
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<header>
	<div class="container-fluid">
		<div align="center"><img src="images/jadventure.png" class="img-responsive"></div>
		<p>
			<?php
			/* include 'conn.php'; */
			session_start();
			?>
			<nav class="navbar navbar-inverse">
				<div class="container-fluid">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
					</div>
					<div class="collapse navbar-collapse" id="navbar">
						<ul class="nav navbar-nav">
							<li><a href="index.php">Home</a></li>
							<li><a href="about.php">About</a></li>
							<li><a href="download.php">Download</a></li>
							<li><a href="reviews.php">Reviews</a></li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
						<!-- <li><a href="editing.php"><span class="glyphicon glyphicon-pencil"></span> Editing</a></li> -->
							<?php
							if (isset($_SESSION['loggedin'])) {
								/* echo "<li><a href='profile.php'><span class='glyphicon glyphicon-user'></span> Profile</a></li>"; */
								/* echo "<li><a href='logout.php'><span class='glyphicon glyphicon-log-out'></span> Logout</a></li>"; */
							} else {
								echo "<li><a href='login.php'><span class='glyphicon glyphicon-log-in'></span> Login</a></li>";
							}
							?>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
	<div class="container-fluid">
