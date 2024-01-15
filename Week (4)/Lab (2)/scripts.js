let sel_ = null; //Dòng được chọn
function avoid(r) {
    if (sel_ != null) {
        sel_.className = "portal-mod-td";
    }
    sel_ = r;
    sel_.className = "selected-portal-mod-td";
    document.getElementById("content").innerHTML = sel_.innerHTML;
}

function tdMouseOver(r) {
    if (r !== sel_) {
        r.className = 'hover-portal-mod-td';
    }
}

function tdMouseOut(r) {
    if (r !== sel_) {
        r.className = 'portal-mod-td';
    }
}