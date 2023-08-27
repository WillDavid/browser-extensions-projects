let notificationCount = 0

function showNotification() {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "images/icon48.jpg",
      title: "Notificação da Extensão",
      message: "Isso é uma notificação de exemplo!"
    });

    notificationCount++
    updateBadge(notificationCount)
    
}

function updateBadge(count) {
    chrome.action.setBadgeText({ text: count.toString() });
  }
  
setInterval(showNotification, 100000);