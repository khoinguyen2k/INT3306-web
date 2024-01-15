<?php
	/**
	*  view.php: Trình diễn kết quả tính tổng hai số
	*/
	class SumView {
		private $x; 
		private $y;
		private $ret;
		/**
			Nhận dữ liệu input và output được model trả về
		*/
		public function __construct($x, $y, $ret) {
			$this->x = $x;
			$this->y = $y;
			$this->ret = $ret;
		}
		/**
		* Tạo cấu phần trang web từ dữ liệu thô
		*/
		public function render() {
			$html = "<div> ";
			$html .= $this->x;
			$html .= " + ";
			$html .= $this->y;
			$html .= " = ";
			$html .= $this->ret;
			$html .= "</div>";
			return $html;
		}	
	}
