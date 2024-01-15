let tbls = document.querySelectorAll("table.sortable");

// Tiền xử lý các bảng, cột sắp xếp được
for (let i = 0; i < tbls.length; i++)
    preProcessSortableTbl(tbls[i]);

function preProcessSortableTbl(tbl) {

    // Thêm vào trước mỗi bảng sắp xếp được 2 đối tượng hidden
    // để lưu thông tin cột và chiều đang được sắp xếp trên bảng.

    let col = document.createElement("input");
    let dir = document.createElement("input");
    col.type = "hidden";
    dir.type = "hidden";
    col.value = "-1";
    dir.value = "";
    tbl.parentNode.insertBefore(col, tbl);
    tbl.parentNode.insertBefore(dir, tbl);

    // Tiền xử lý thẻ th sắp xếp được

    let hcells = tbl.rows[0].cells;
    for (let i = 0; i < hcells.length; i++)
        if (hcells[i].classList.contains("sortcol")) {

            // mũi tên chiều sắp xếp.
            hcells[i].innerHTML += '<span class="arrow"></span>';

            hcells[i].onclick = function () {
                //direction
                let d = this.parentNode.parentNode.parentNode.previousSibling;
                //column already sorted
                let c = d.previousSibling;

                // Bỏ biểu thị cột đang được sắp xếp (nếu có)
                let j;
                for (j = 0; j < this.parentNode.cells.length; j++) {
                    this.parentNode.cells[j].classList.remove("asc");
                    this.parentNode.cells[j].classList.remove("desc");
                }

                // Lấy chỉ mục của ô tiêu đề
                for (j = 0; j < this.parentNode.cells.length; j++)
                    if (this.parentNode.cells[j] === this) break;

                if (c.value === j.toString()) {
                    // Cột chứa ô tiêu đề đang được sắp xếp, đảo chiều
                    d.value = (d.value === "desc" ? "asc" : "desc");

                } else {
                    // Mặc định sắp xếp tăng dần
                    c.value = j.toString();
                    d.value = "asc";
                }

                // Thêm biểu thị cột được sắp xếp
                this.classList.add(d.value);

                // Sắp xếp
                sortTbl(this.parentNode.parentNode.parentNode);
            };
        }
}

// Sắp xếp dữ liệu trong bảng, trừ cột 1

function sortTbl(tbl) {
    let dir = tbl.previousSibling.value;
    let col = parseInt(tbl.previousSibling.previousSibling.value);

    if (isNumberColumn(tbl, col))
        numeralSortTable(tbl);
    else {
        for (let i = 1; i < tbl.rows.length; i++)
            for (let j = i + 1; j < tbl.rows.length; j++) {
                if ((dir === "asc" && tbl.rows[i].cells[col].innerHTML.toLowerCase() >
                    tbl.rows[j].cells[col].innerHTML.toLowerCase()) ||
                    (dir === "desc" && tbl.rows[i].cells[col].innerHTML.toLowerCase() <
                        tbl.rows[j].cells[col].innerHTML.toLowerCase())) {

                    //hoán vị
                    for (let t = 1; t < tbl.rows[i].cells.length; t++) {
                        let tmp = tbl.rows[i].cells[t].innerHTML;
                        tbl.rows[i].cells[t].innerHTML = tbl.rows[j].cells[t].innerHTML;
                        tbl.rows[j].cells[t].innerHTML = tmp;
                    }
                }
            }
    }
}

function isNumberColumn(tbl, col) {
    for (let i = 1; i < tbl.rows.length; i++) {
        if (isNaN(parseFloat(tbl.rows[i].cells[col].innerHTML)))
            return false;
    }
    return true;
}

function numeralSortTable(tbl) {
    let dir = tbl.previousSibling.value;
    let col = parseInt(tbl.previousSibling.previousSibling.value);

    for (let i = 1; i < tbl.rows.length; i++)
        for (let j = i + 1; j < tbl.rows.length; j++) {
            if ((dir === "asc" && parseFloat(tbl.rows[i].cells[col].innerHTML) >
                parseFloat(tbl.rows[j].cells[col].innerHTML)) ||
                (dir === "desc" && parseFloat(tbl.rows[i].cells[col].innerHTML) <
                    parseFloat(tbl.rows[j].cells[col].innerHTML))) {

                //hoán vị
                for (let t = 1; t < tbl.rows[i].cells.length; t++) {
                    let tmp = tbl.rows[i].cells[t].innerHTML;
                    tbl.rows[i].cells[t].innerHTML = tbl.rows[j].cells[t].innerHTML;
                    tbl.rows[j].cells[t].innerHTML = tmp;
                }
            }
        }
}
