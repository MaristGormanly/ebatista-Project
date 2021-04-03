function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        window.location.replace("http://localhost:1337/mainmenu");
    }
});


	
async function fadeout() {
    document.getElementById('fade').style.opacity = '0';
	sleep(1000).then(() => {fadein();});
}

async function fadein() {
    document.getElementById('fade').style.opacity = '1';
	sleep(1000).then(() => {fadeout();});
}

window.onload = async function() {
fadeout();  
}
