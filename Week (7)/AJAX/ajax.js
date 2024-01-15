function getXmlHttpObject() {
    let xmlHttp = null;
    try {  
        xmlHttp = new XMLHttpRequest(); 
    } catch (e) {
        try  { 
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {                          
			try {  
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");  
			} catch (e) { 
				return null;
			}                   
        }   
    }
	return xmlHttp;
}

document.getElementById("btn1").onclick = function () {
    this.disabled = true;
    var xmlhttp = getXmlHttpObject();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4) document.getElementById("div1").innerHTML = this.responseText;
    };
    xmlhttp.open("GET", "http://112.137.129.155/lects/webappdev/ajax/abc.htm", true);
    xmlhttp.send(null);
};