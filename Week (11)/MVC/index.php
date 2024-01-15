<!DOCTYPE html>
<html>
<head>
	<title>MVC</title>
	<meta name="author" content="Tran Vo Khoi Nguyen 21020780">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<h1>Tổng hai số</h1>
<?php
require_once("controller.php");
$ctrl = new SumControl();
$ctrl->proc();
?>
<form method="post">
	x = <input title="x-input" type="text" name="x" value="<?php echo(isset($_POST["x"]) ? $_POST["x"] : ""); ?>"/>
	<br/>
	y = <input title="y-input" type="text" name="y" value="<?php echo(isset($_POST["y"]) ? $_POST["y"] : ""); ?>"/>
	<br/>
	<input type="submit" value="Chấp nhận"/>
</form>
</body>
</html>
