function ChuanhoaTen(ten) {
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


function laNgayThang(d) {
	//kiem tra d co phai la ngay thang
	//nn/tt/nnnn

	//tach xau d boi dau /
	s = d.split('/');

	if (s.length !== 3) return false; //phai co 3 phan
	if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;//ca 3 la so

	//chuyen thanh cac so nguyen
	s[1] = s[1].substring(s[1].length-2);
	if (s[1][0] === '0') s[1] = s[1].substring(s[1].length-1);
	
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

	date = new Date();
	if (nam > date.getFullYear() || nam < 1900) return false;

	return true;
}
