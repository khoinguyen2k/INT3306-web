document.getElementById("btn1").onclick = function () {

    this.disabled = true;
    // Lấy dữ liệu trên server về
    // trả về promise
    fetch("http://112.137.129.155/lects/webappdev/json/data/").then(response => {

        if (response.status === 200) {
            // Lấy dữ liệu JSON trong body của response
            // trả về promise
            response.json().then(data => {
                // Cập nhật DOM theo dữ liệu JSON
                for (let i = 0; i < data.length; i++) {
                    let r = document.createElement("tr");
                    let c1 = document.createElement("td");
                    let c2 = document.createElement("td");
                    let c3 = document.createElement("td");
                    let c4 = document.createElement("td");
                    c1.innerHTML = data[i].name;
                    c2.innerHTML = data[i].age;
                    c4.innerHTML = data[i].cars.length;
                    for (let j = 0; j < data[i].cars.length; j++) {
                        c3.innerHTML += data[i].cars[j].name + " - " + data[i].cars[j].models;
                        if (j !== data[i].cars.length - 1) c3.innerHTML += "<br>";
                    }
                    r.appendChild(c1);
                    r.appendChild(c2);
                    r.appendChild(c3);
                    r.appendChild(c4);
                    document.querySelector("#tbl1 tbody").appendChild(r);
                }
            });
        }
    });
};