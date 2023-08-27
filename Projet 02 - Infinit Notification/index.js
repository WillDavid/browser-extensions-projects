const button = document.getElementById("notificar");

button.addEventListener("click", (event) => {
    event.preventDefault()

    chrome.notifications.create({
        type: "basic",
        iconUrl: "images/icon48.jpg",
        title: "Tutilabs",
        message: "Isso é uma notificação de exemplo!"
    });
});
