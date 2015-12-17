var url;
// aリンクがクリックされた時
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    //requestのurlを保存
    url = request.url;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      //現在のタブの状態を取得
      var isCurrentTabPinned = tabs[0].pinned;
      if(isCurrentTabPinned){
        alert("tab is pinned!!")
        alert(url)
        chrome.tabs.create({ url: url }); //リクエストを受け取って処理
      }else{
        alert("tab is not pinned!!")
      }
    });
  }
);


