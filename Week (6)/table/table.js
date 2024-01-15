// Kích checkbox từng dòng

// Khi người dùng đánh dấu tất cả các hộp kiểm ở dưới thì hộp kiểm ở dòng đầu tiên cũng được đánh dấu.
// Nếu còn ít nhất một hộp kiểm phía dưới chưa được đánh dấu thì hộp kiểm ở dòng đầu tiên cũng không được đánh dấu.
//
let chks = document.getElementsByName("chk");
for (let i = 0; i < chks.length; i++)
	chks[i].onchange = function() {
			if (this.checked) {
				this.parentNode.parentNode.classList.add("selectedr");
				//kiem tra da check all chua
                //
				let c = document.getElementsByName("chk");
				let j = 0;
				for (; j < c.length; j++)
					if (!c[j].checked) break;
				if (j === c.length)
				    document.getElementById("chkall").checked = true;

			} else {
				this.parentNode.parentNode.classList.remove("selectedr");
				document.getElementById("chkall").checked = false;
			}
	};

// Kích checkbox từng dòng
// Khi người dùng kích chuột vào dòng trừ dòng tiêu đề thì hiệu ứng tương tự kích chuột vào hộp kiểm ở dòng đó.
//
let dataRowList = document.querySelectorAll("tbody tr");
for (let i = 0; i < dataRowList.length; i++) {
    dataRowList[i].onclick = function () {
        let inputBttn = this.querySelector("input");
        inputBttn.checked = !inputBttn.checked;

        if (inputBttn.checked) {
            this.classList.add("selectedr");
            //kiem tra da check all chua
            //
            let c = document.getElementsByName("chk");
            let j = 0;
            for (; j < c.length; j++)
                if (!c[j].checked) break;
            if (j === c.length)
                document.getElementById("chkall").checked = true;
        }
        else {
            this.classList.remove("selectedr");
            document.getElementById("chkall").checked = false;
        }
    };
}

//Khi người dùng đánh dấu/bỏ đánh dấu vào hộp kiểm trên cùng/ở dòng đầu tiên
//thì tất cả các hộp kiểm khác đều được đánh dấu/bỏ đánh dấu theo.
//
document.getElementById("chkall").onchange = function() {
	let c = document.getElementsByName("chk");			
	for (let i = 0; i < c.length; i++) {
		c[i].checked = this.checked;
		if (c[i].checked) c[i].parentNode.parentNode.classList.add("selectedr");
		else c[i].parentNode.parentNode.classList.remove("selectedr");		
	}
	if (this.checked) document.querySelector("div.group-op").classList.remove("nodisplay");
	else document.querySelector("div.group-op").classList.add("nodisplay");
};


