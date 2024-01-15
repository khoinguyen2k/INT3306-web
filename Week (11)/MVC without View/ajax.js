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