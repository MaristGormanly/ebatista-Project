var setup = require('../../../server/controllers/setupController');

document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        window.location.replace("http://localhost:1337/mainmenu");
	}
    if (event.keyCode === 49) {
        setup.saveProfession("Banker");
        window.location.replace("http://localhost:1337/mainmenu");
	
    }
});

