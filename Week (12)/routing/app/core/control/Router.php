<?php
	// Tệp app/core/control/Router.php
    namespace core\control;
    
    class Router {
		/*
			Input: RESTful URL
			Output: ["module", "controller", "action", [parameters]]
		*/
        public static function proc() {
			$ret = array();
			$moduleName = "fallback";		// Tên module, mặc định là module báo lỗi
            $controllerName = "fallback";	// Tên bộ điều khiển, mặc định là trình điều khiển báo lỗi
            $actionName = "proc";			// Tên hành động
            $parameters = array();			// Các tham số

			// Tách URI
//			$requestURI = explode('/', strtolower($_SERVER['REQUEST_URI']));
			$requestURI = explode('/', 'localhost:63342/Test/Week%20(12)/routing/index.php/students');
			$scriptName = explode('/', strtolower($_SERVER['SCRIPT_NAME']));
			$commandArray = array_diff_assoc($requestURI, $scriptName);
			$commandArray = array_values($commandArray);
			

			// GET /students
			if (count($commandArray) == 1	&&
//				$_SERVER["REQUEST_METHOD"] == "GET" &&
				strtolower($commandArray[0]) == "students") 
			{
				$moduleName = "qldt";
				$controllerName = "std";
				$actionName = "proc";
			}
			// GET /kh 
						// Alias cho students
						// Có thể ánh xạ nhiều URI đến một controller.action
			else if (
//			    $_SERVER["REQUEST_METHOD"] == "GET" &&
					count($commandArray) == 1	&&
				strtolower($commandArray[0]) == "kh") 
			{
				$moduleName = "qldt";
				$controllerName = "std";
				$actionName = "proc";
			}
			// GET /students/{id}
			else if (count($commandArray) == 2 &&
//				$_SERVER["REQUEST_METHOD"] == "GET" &&
				strtolower($commandArray[0]) == "students") 
			{
				$moduleName = "qldt";
				$controllerName = "std";
				$actionName = "getByID";
				$parameters[0] = $commandArray[1];
			}
			// PUT /students/{id}
			else if (count($commandArray) == 2 &&
//				$_SERVER["REQUEST_METHOD"] == "PUT" &&
				strtolower($commandArray[0]) == "students") {
				$moduleName = "qldt";
				$controllerName = "std";
				$actionName = "updateOneStd";
				$parameters[0] = $commandArray[1];
			}
			


			// Trả kết quả về cho bộ điều khiển mặt trước
			$ret["moduleName"]  = $moduleName;		
			$ret["controllerName"]  = $controllerName;
			$ret["actionName"]  = $actionName;
			$ret["parameters"]  = $parameters;	
			return $ret;
        }
    }
