var x = document.getElementById("music");
var audio = "false"; 
document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 49) {
        window.location.replace("http://localhost:1337/setup");
	}
	else if (event.keyCode === 50){
		window.location.replace("http://localhost:1337/setup");
	}
	else if (event.keyCode === 51){
		window.location.replace("http://localhost:1337/topten");
	}
	else if (event.keyCode === 52){
		if (audio == "false"){
			x.play();
			audio = "true";
			document.getElementById("on/off").innerHTML = "Off";
		}
		else if (audio == "true"){
			x.pause();
			audio = "false";
			document.getElementById("on/off").innerHTML = "On";
		}
    }
});