<?php

namespace core\control;
require_once("app/core/control/Router.php");

//Bộ điều khiển mặt trước
class FrontController
{
    public static function proc()
    {
        //Định tuyến
        $ret = Router::proc();

        //Bao hàm tệp cài đặt lớp điều khiển
//        $filename = "app/" . $ret["moduleName"] . "/control/" . ucfirst($ret["controllerName"]) . "Controller.php";
        $filename = "app/qldt/control/StdController.php";
        require_once($filename);

        //Khai báo đối tượng lớp điều khiển
//        $controllerName = "\\" . $ret["moduleName"] . "\\control\\" . ucfirst($ret["controllerName"]) . "Controller";
        $controllerName = "\\qldt\\control\\StdController";
        $controller = new $controllerName();

        //Kiểm tra phương thức có tồn tại hay không và thực thi
        //trả kết quả về cho frontend
        if (method_exists($controller, $ret['actionName'])) {
            $action = $ret['actionName'];
            $ret = $controller->$action($ret['parameters']);
            header('Access-Control-Allow-Origin: *');
            echo json_encode($ret);
        } else {
//            header('Content-type: application/json');
            echo '{"status":"ERR", "data":"ACTION-NOT-FOUND"}';
        }
    }
}

FrontController::proc();
