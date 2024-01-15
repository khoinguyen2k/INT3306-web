<?php
    namespace qldt\control;
    
    class StdController {
        public function proc($arr) {
			return array("status" => "OK", "data" => [1, 2, 3]);
        }

		public function getByID($arr) {
			return array("status" => "OK", "data" => ["masv" => 12]);
        }

        public function updateOneStd($arr) {
			return array(
					"status" => "OK", 
				"data" => json_decode(file_get_contents("php://input"), true));
        }  
    }
