function clicked() {
    const query = { active: true, currentWindow: true };
    chrome.tabs.query(query, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
            message: "cn",
        });
    })
}

const button = document.getElementById("btn_item1");
button.onclick = clicked;
