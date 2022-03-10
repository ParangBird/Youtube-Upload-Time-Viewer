chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status != "complete") return;
    setTimeout(() => {
        chrome.tabs.sendMessage(tabId, { msg: "sendURL", url: tab.url }, (data) => {
            //sendURL에 현재 url 넣어 보내고 콜백
        });
    }, 1000);

    chrome.scripting.executeScript(
        {
            target: { tabId: tab.id },
            files: ["get.js"],
        },
        () => {}
    );
});
