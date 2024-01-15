function masvKeyUp(e) {
    if (e.keyCode === 13) $("#hoten").focus();
}

function hotenKeyUp(e) {
    $("#loi_hoten").html("");
    if (e.keyCode === 13) $("#ngaysinh").focus();
}

function ngaysinhKeyUp(e) {
    if (e.keyCode === 13) $("#gioitinh").focus();
}

function gioitinhKeyUp(e) {
    if (e.keyCode === 13) $("#quequan").focus();
}

function hotenBlur() {
    $("#hoten").val(ChuanhoaTen($("#hoten").val()));
}

function chapnhan() {
    //xoa cac thong bao loi
    $("#loi_hoten").html("");
    $("#loi_masv").html("");
    $("#loi_ngaysinh").html("");
    //kiem tra hop thuc
    if ($("#hoten").val() === "") {
        $("#loi_hoten").html("Chưa nhập họ tên.");
    }

    if ($("#masv").val() === "") {
        $("#loi_masv").html("Chưa nhập mã.");
    }

    if ($("#ngaysinh").val() !== "") {
        if (!laNgayThang($("#ngaysinh").val()))
            $("#loi_ngaysinh").html("Ngày sinh không đúng.");
    }
}


$(document).ready(function () {
    $("#masv").focus();

    $("#masv").keyup(masvKeyUp);
    $("#hoten").keyup(hotenKeyUp);
    $("#ngaysinh").keyup(ngaysinhKeyUp);
    $("#gioitinh").keyup(gioitinhKeyUp);

    $("#hoten").blur(hotenBlur);

    $("#btnchapnhan").click(chapnhan);
});