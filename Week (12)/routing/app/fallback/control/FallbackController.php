<?php
    namespace fallback\control;
    
    class FallbackController {
        public function proc($arr) {
            return array("status" => "ERR", "data" => "ACTION-NOT-FOUND"); 
        }
    }
