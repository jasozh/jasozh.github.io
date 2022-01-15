<?php include 'header.php'; ?>
<head>
	<title>Home - JAdventure</title>
</head>
<body>
	<div class="well">
		<div class="row">
			<div class="col-sm-5">
				<a href="images/2.0-screenshot.png"><img src="images/2.0-screenshot.png" class="img-responsive" alt="JAdventure screenshot"></a>
			</div>
			<div class="col-sm-7">
				<font color=orange><h3>About JAdventure</h3></font>
				<p>JAdventure is a free, text adventure game with a prevalent fantasy theme developed by Jason Zheng. In the game, the player chooses a role and controls a character through simple text commands. Players earn predetermined points for killing monsters and surviving journeys into the Valley of Doom, with the goal to earn the maximum amount of points offered. A secondary objective is to defeat a cruel beast and restore peace to the lands, and players may pick up items and gather wisdom to help in their journeys. <a href="about.php">Read more</a>.</p>
				<br>
				<form action="<?php $_PHP_SELF ?>" method="GET">
					<div class="input-group">
						<div class="input-group-btn">
							<button class="btn btn-default" type="submit" name="index-download">
								<i class="glyphicon glyphicon-download-alt"></i>
							</button>
						</div>
						<div class="form-group">
							<select class="form-control" name="version">
								<option>Download JAdventure 2.0 (stable)</option>
								<option>Download JAdventure 1.4 (legacy)</option>
							</select>
						</div>
					</div>
				</form>
				<?php
					if(isset($_REQUEST['index-download'])) {
						$version = $_REQUEST['version'];

						if($version == "Download JAdventure 2.0 (stable)") {
							header('Location: versions/jadventure-2.0.zip');
						} elseif ($version == "Download JAdventure 1.4 (legacy)") {
							header('Location: versions/jadventure-1.4.zip');
						}
					}
				?>
			</div>
		</div>
	</div>

	<h3>Latest News</h3>
	<hr>

	<h4>JAdventure 2.0 stable release!</h4>
	<div class="date">December 8th, 2016</div>
	<br>
	<p>
	After months of vicious coding and suspense, the JAdventure development team is proud to announce the 2.0 stable release! As the version number suggests, 2.0 is a massive overhaul of anything and everything. Vast swaths of bugs were finally squashed and plenty of shiny new features were squeaked in. Innumerable tweaks to the user interface assuages eyesores, and a brand-new commands system has been introduced to increase the interface flexibility. Font colors and ASCII art have also been introduced to JAdventure, and extra flavor messages were added everywhere. Combat has not been neglected either, and new improvements include bare-handed combat and an ammunition system for the crossbow. Read the <a href="ChangeLog.txt">ChangeLog</a> for a complete list of changes and download the release <a href="versions/jadventure-2.0.zip">here</a>.
	</p>

	<ul class="pager">
		<li class="next"><a href="news.php">Older news</a></li>
	</ul>
</body>
<?php include 'footer.php'; ?>
