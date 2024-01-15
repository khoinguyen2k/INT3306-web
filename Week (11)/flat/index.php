<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Phương trình bậc hai</title>
</head>
<body>
<h1>Phương trình bậc hai</h1>
<?php

// Bước 1. Kiểm tra dữ liệu nhập
if (!isset($_GET["a"]) || !isset($_GET["b"]) || !isset($_GET["c"])) {
    echo "Nhập a, b c";
} else {
    if (!is_numeric($_GET["a"]) || !is_numeric($_GET["b"]) || !is_numeric($_GET["c"])) {
        echo "a b c phải là số";
    } else {
        // Bước 2. Giải bài toán và trả kết quả cho client
        $a = floatval($_GET["a"]);
        $b = floatval($_GET["b"]);
        $c = floatval($_GET["c"]);

        if ($a != 0) {
            $delta = $b * $b - 4 * $a * $c;
            if ($delta < 0) echo "Phương trình vô nghiệm.";
            else if ($delta == 0) echo "Phương trình có một nghiệm x = " . (-$b / 2 / $a);
            else echo "Phương trình có hai nghiệm x1 = " . ((-$b - sqrt($delta)) / 2 / $a) . ", x2 = " . ((-$b + sqrt($delta)) / 2 / $a);
        } else {
            if ($b != 0) echo "Phương trình có một nghiệm x = " . (-$c / $b);
            else if ($c == 0) echo "Phương trình có vô số nghiệm.";
            else echo "Phương trình vô nghiệm.";
        }
    }
}
?>

<form>
	a = <input title="a-input" type="text" name="a" value="<?php echo(isset($_GET["a"]) ? $_GET["a"] : ""); ?>"/> <br/>
	b = <input title="b-input" type="text" name="b" value="<?php echo(isset($_GET["b"]) ? $_GET["b"] : ""); ?>"/> <br/>
	c = <input title="c-input" type="text" name="c" value="<?php echo(isset($_GET["c"]) ? $_GET["c"] : ""); ?>"/> <br/>
	<input type="submit" value="Chấp nhận"/>
</form>
</body>
</html>
