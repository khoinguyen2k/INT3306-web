// Đặt tâm điểm vào ô nhập họ tên khi mới vào trang
// Các ô phải nhập có có nền mầu nền xanh
//
document.getElementById("hoten").focus();

// Khi người dùng nhập xong một ô và gõ Enter thì chương trình chuyển điều khiển sang ô tiếp theo
//
const textInputIdList = ["hoten", "diachi", "ngaysinh", "email", "codinh", "username",
    "pass", "repass"];

for (let idx = 0; idx <textInputIdList.length; idx++) {
    document.getElementById(textInputIdList[idx]).onkeyup = function(e) {
        DoKeyup(e, this, textInputIdList[(idx + 1) % textInputIdList.length]);
    };
}

function DoKeyup(e, myself, nextcontrolid) {
	if (window.event) e = window.event; //de chay ca tren IE
	if (e.keyCode === 13) {//phim enter
		document.getElementById(nextcontrolid).focus();
    }
}

// Khi người dùng nhập xong tên và chuyển điều khiển ra khỏi ô Họ và tên thì chuẩn hóa họ tên
// (bỏ các dấu cách không cần thiết, viết hoa các chữ cái đầu các từ)
//
document.getElementById("hoten").onblur = function() {
    this.value = chuanHoaTen(this.value);
};

// Khi người dùng nhập xong email thì kiểm tra định dạng email là ten[.ten]*@ten[.ten]*.
// Nếu email được nhập không đúng định dạng thì thông báo lỗi ngay sau ô nhập email.
//
document.getElementById("email").onblur = function() {
    //reset thong bao loi
    document.getElementById("loi_email").innerHTML = "";
    if (!laEmail(this.value)) {
        document.getElementById("loi_email").innerHTML = "E-mail không đúng định dạng";
        // this.focus();
    }
};

// Khi người dùng nhập các số vào ngày sinh thì tự động thêm các dấu cách /
// khi đã nhập đủ ngày, hay đã nhập đủ tháng.
//
document.getElementById("ngaysinh").oninput = function () {
    let dateString = this.value;
    if (dateString.length === 2 || dateString.length === 5) {
        this.value = dateString.concat("", "/");
    }
};

// Khi người dùng gõ lại mật khẩu xong thì kiểm tra mật khẩu gõ lại có trùng mật khẩu không.
// Nếu không trùng thì hiển thị thông báo “Mật khẩu gõ lại không đúng” ngay sau ô nhập lại mật khẩu
//
document.getElementById("repass").onblur = function() {
    //reset thong bao loi
    document.getElementById("loi_repass").innerHTML = "";
    if (document.getElementById("pass").value !== document.getElementById("repass").value) {
        document.getElementById("loi_repass").innerHTML = "Mật khẩu và gõ lại mật khẩu không trùng nhau";
    }
};

const mustHaveInputIdList = ["hoten", "ngaysinh", "email", "username",
    "pass", "repass"];

function checkEmptyField() {
    let hasEmptyField = false;
    for (let idx = 0; idx <mustHaveInputIdList.length; idx++) {
        let inputId = mustHaveInputIdList[idx];
        let errorId = "loi_" + inputId;
        let errorNotification = document.getElementById(errorId);

        //reset cac thong bao loi
        errorNotification.innerHTML = "";
        if (document.getElementById(inputId).value === "") {
            hasEmptyField = true;
            errorNotification.innerHTML = "Quý khách hãy điền vào ô này, đây là phần bắt buộc";
        }
    }
    return hasEmptyField;
}

// Khi người dùng bấm Chấp nhận, kiểm tra các thông tin đã được nhập hay chưa (trừ địa chỉ và điện thoại).
// Nếu thông tin nào chưa được nhập thì hiển thị thông báo ngay sau ô nhập thông in đó.
//
function Chapnhan() {
	let okie = !checkEmptyField();//okay when not empty, else no

    if (document.getElementById("pass").value !== document.getElementById("repass").value) {
		document.getElementById("loi_repass").innerHTML = "Mật khẩu và gõ lại mật khẩu không trùng nhau";
		document.getElementById("pass").focus();
		okie = false;
	}

	if (!laNgayThang(document.getElementById("ngaysinh").value)) {
		document.getElementById("loi_ngaysinh").innerHTML = "Ngày sinh không đúng định dạng";
		document.getElementById("ngaysinh").focus();
		okie = false;
	}

	//show email error notification if it still not valid
    if ((document.getElementById("email").value !== "")
        && !laEmail(document.getElementById("email").value)) {
        document.getElementById("loi_email").innerHTML = "E-mail không đúng định dạng";
        okie = false;
        // this.focus();
    }

	//submit form
	if (okie) document.getElementById("form1").submit();
}

function laEmail(s) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(s);
}

function laNgayThang(d) { //d = nn/tt/nnnn
	s = d.split('/');

	if (s.length !== 3) return false;

	if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;

	ngay = parseInt(s[0]);
	thang = parseInt(s[1]);
	nam = parseInt(s[2]);

	//kiem tra
	if (thang > 12 || thang < 1) return false;
	if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
		if (ngay > 31) return false;
	} else if (thang === 2){
		if (nam%4 === 0 && nam%100 !== 0) {
			if (ngay > 29) return false;
		} else if (ngay > 28) return false;
	} else if (ngay > 30) return false;

	if (ngay < 1) return false;

	date = new Date();
	return !(nam > date.getFullYear() || nam < 1950);

}

function chuanHoaTen(ten) {
	dname = ten;
	ss = dname.split(' ');
	dname = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (dname.length > 0) dname = dname + " ";
			dname = dname + ss[i].substring(0, 1).toUpperCase();
			dname = dname + ss[i].substring(1).toLowerCase();
		}
	return dname;
}

function Boqua() {
	document.location.href = "#";
}

// hien thi anh chan dung
document.getElementById("FileUpload1").onchange = function () {
    let preview = document.querySelector("img.preview");
    let file = this.files[0];
    let reader = new FileReader();
    reader.onload = function () {
        preview.src = reader.result;
    };
    if (file) {
        reader.readAsDataURL(file);
        preview.classList.remove("nodisplay");
    }
};
