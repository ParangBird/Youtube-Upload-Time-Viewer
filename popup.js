document.querySelector("#apply").addEventListener("click", () => {

    console.log('clicked');
    let selectBox = document.getElementById('selectBox');
    let nowTimezone = document.getElementById('now-timezone');
    console.log("value : " + selectBox.options[selectBox.selectedIndex].value 
                    + "text : " + selectBox.options[selectBox.selectedIndex].text
                    + "id : " + selectBox.selectedIndex);

    chrome.storage.local.set({
        test : 'test value',
        offset : selectBox.options[selectBox.selectedIndex].value,
        selectedIndex : selectBox.selectedIndex,
        text : selectBox.options[selectBox.selectedIndex].text
    });

    nowTimezone.innerText = "Now TimeZone : " + selectBox.options[selectBox.selectedIndex].text;
    chrome.storage.local.get((data) => {console.log(data.test)});
});

function init(){
    let nowTimezone = document.getElementById('now-timezone');
    let uploadTime = document.getElementById('upload-time');
    chrome.storage.local.get((data) => {
        uploadTime.innerText = "Upload time : " + data.date;
        nowTimezone.innerText = "Now TimeZone : " + data.text;
    });

} 

init();

// function getTitle() {
//     test.innerHTML = "hello";
//     console.log('hello');
//     // document.querySelector("body").style.backgroundColor = "red";
//     return document.title;
// }
// async function getCurrentTab() {
//     let queryOptions = { active: true, currentWindow: true };
//     let [tab] = await chrome.tabs.query(queryOptions);
//     //console.log(tab);
//     chrome.scripting.executeScript(
//         {
//             target: { tabId: tab.id },
//             func: getTitle,
//         },
//         () => {
//             //console.log("yahoo");
//         }
//     );
// }

// let flag = 0;
// let changeColor = document.getElementById("changeColor");
// changeColor.addEventListener("click", () => {});

// getCurrentTab();

// var offset = new Date().getTimezoneOffset();
// console.log(offset);
