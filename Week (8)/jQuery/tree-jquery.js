$(document).ready(function(){
	$("img.tree-toggle").click(function(){
		if (this.nextSibling.nextSibling.nextSibling.style.display === "") {
			this.nextSibling.nextSibling.nextSibling.style.display = "none";
			this.src = "images/plus.gif";
		} else {
			this.nextSibling.nextSibling.nextSibling.style.display = "";
			this.src = "images/minus.gif";
		}
	});
});
		