var button = document.querySelector(".component-cards-2022__item__link-wrapper a");
if (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        openSFPopup();
    });
}

function openSFPopup() {
    if(window.sfV3) {
        window.sfV3.loadChatToolForm("HLoI3JozAbKO9Gf6vKH4","popup", "body")
    }
}
