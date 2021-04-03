var audio = "false";
var x = document.getElementById("music");

document.body.addEventListener("keydown", function (event) {
	if (event.keyCode === 77){
		if (audio == "false"){
			x.play();
			audio = "true";
			document.getElementById("mute").innerHTML = "Press M to Mute";
		}
		else if (audio == "true"){
			x.pause();
			audio = "false";
			document.getElementById("mute").innerHTML = "Press M to Unmute";
		}
    }
});