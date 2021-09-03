// const observer = new MutationObserver((mutationList) => {
//     // 함수 실행
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message == "cn") {
        const xpathResult = document.evaluate(
            '/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[5]/div[1]/div/ytd-comments/ytd-item-section-renderer/div[1]/ytd-comments-header-renderer/div[1]/h2/yt-formatted-string/span[2]',
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        
        const commentNum = xpathResult.singleNodeValue.outerText;
        if (Number(commentNum.replace(/,/gi, "")) >= 1000) {
            console.log("API를 사용하세요!");
        } else {
            console.log("직접 가져와도 됩니다!");
            getCommentByCrawling();
        }
    }
})

function getCommentByAPI() {
    // using fetch
    // https://gist.github.com/chowon442/31f86fa23ad2a9b8a7b39b432b1f8f71
}

function getCommentByCrawling() {
    const commentList = document.getElementsByTagName('ytd-comment-thread-renderer');
    console.log(commentList);
    let commentNum = 0
    let commentValueList = [];
    for (let i=0; i<commentList.length; i++) {
        commentNum++;
        console.log(commentNum);
        const commentString = commentList[i].querySelector('#content-text').innerText
        commentValueList.push(commentString)
        console.log(commentString)
    }
    console.log(commentValueList);
}

function getReplies() {
    // id: replies
    // 답글 더보기 열기
    // 답글 가져오기
    // 답글 더보기 닫기
}