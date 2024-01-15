<?php
require_once("model.php");
require_once("view.php");

class SumControl
{
    public function proc()
    {
        //1. Nhận yêu cầu, kiểm tra dữ liệu người dùng
        if (isset($_POST["x"]) && isset($_POST["y"])
            && is_numeric($_POST["x"]) && is_numeric($_POST["y"])) {

            $x = floatval($_POST["x"]);
            $y = floatval($_POST["y"]);

            $model = new SumModel($x, $y);
            $model->solve();
            $ret = $model->getSum();

            $view = new SumView($x, $y, $ret);
            $html = $view->render();

            echo $html;
        } else {
            echo "Nhập x, y là các số.";
        }
    }
}
