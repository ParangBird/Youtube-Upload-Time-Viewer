chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.msg === "sendURL") {
        getData(request.url);
    }
});

// TODO: 선택된 시간대에 따라서 formatting을 변경해야 한다.
// 시간대를 선택하게 만들 수 있어야 한다. (팝업페이지 예쁘게 만들기)
// storage로 popup에서 offsetHours 저장해서 받아오면 되지않을까요

function formatting(date, offsetHours) { 

    // date formatting
    //   2020-08-29T06:23:09Z
    //-> 2020. 08. 29. 06:23:09
    const dateDate = new Date(date);
    dateDate.setHours(dateDate.getHours() + 0);

    const yy = dateDate.getFullYear();
    const mm = dateDate.getMonth() + 1;
    const dd = dateDate.getDate();
    const formattedCalender = yy + ". " + mm + ". " + dd + ".  ";

    const hour = ("0" + dateDate.getHours()).slice(-2);
    const min = ("0" + dateDate.getMinutes()).slice(-2);
    const sec = ("0" + dateDate.getSeconds()).slice(-2);

    const formattedTime = "│ " + hour + " : " + min + " : " + sec;
    const formattedDate = formattedCalender + formattedTime;

    return formattedDate;
}

function getURLParams(url) {
    var result = {};
    url.replace(/[?&]{1}([^=&#]+)=([^&#]*)/g, function (s, k, v) {
        result[k] = decodeURIComponent(v);
    });
    return result;
}

function getData(url) {
    const YOUTUBE_VIDEO_ID = getURLParams(url).v;
    const YOUTUBE_API_KEY = "";

    fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${YOUTUBE_VIDEO_ID}&key=${YOUTUBE_API_KEY}&part=snippet,statistics&fields=items(id,snippet,statistics)`
    )
        .then((response) => response.json())
        .then((data) => {
            let date = data.items[0].snippet.publishedAt;
            chrome.storage.local.get((data) => {
                let offset = data.offset;
                let formattedDate = formatting(date, offset);
                document.getElementsByClassName('yt-formatted-string bold')[2]
                .innerText = formattedDate;
    
                chrome.storage.local.set({
                    date : formattedDate
                });
            });
        });
}
