//タブが変更される度にタブの状態を取得
chrome.tabs.onActivated.addListener(function(tabId, props) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    isCurrentTabPinned = tabs[0].pinned;
    debugger
  });
});


