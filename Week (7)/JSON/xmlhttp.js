function getXmlHttpObject() {
    let xmlhttp = null;
    try {
        xmlhttp = new XMLHttpRequest();
    }
    catch (e) {
        try {
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                console.log("Trình duyệt không hỗ trợ AJAX!");
            }
        }
    }
    return xmlhttp;
}

document.getElementById("btn1").onclick = function () {
    this.disabled = true;
    let xmlhttp = getXmlHttpObject();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                let obj = JSON.parse(this.responseText);
                console.log(obj);

                for (let i = 0; i < obj.length; i++) {
                    let r = document.createElement("tr");
                    let c1 = document.createElement("td");
                    let c2 = document.createElement("td");
                    let c3 = document.createElement("td");
                    let c4 = document.createElement("td");
                    c1.innerHTML = obj[i].name;
                    c2.innerHTML = obj[i].age;
                    c4.innerHTML = obj[i].cars.length;
                    for (let j = 0; j < obj[i].cars.length; j++) {
                        c3.innerHTML += obj[i].cars[j].name + " - " + obj[i].cars[j].models;
                        if (j !== obj[i].cars.length - 1) c3.innerHTML += "<br>";
                    }
                    r.appendChild(c1);
                    r.appendChild(c2);
                    r.appendChild(c3);
                    r.appendChild(c4);
                    document.querySelector("#tbl1 tbody").appendChild(r);

                }
            }
        }
    };
    xmlhttp.open("GET", "http://112.137.129.155/lects/webappdev/json/data/", true);
    xmlhttp.send(null);
};