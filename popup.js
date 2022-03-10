document.querySelector("#apply").addEventListener("click", () => {

    console.log('clicked');

});

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
