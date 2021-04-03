document.body.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
        window.location.replace("http://localhost:1337/mainmenu");
    }
});