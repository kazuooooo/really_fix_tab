$(function(){
  //リンクがクリックされた
  $('a').mousedown(function(){
    //alert($(this).attr('href'));
    //選択しているタブを取得
    //タブの状態を取得（多分別スクリプト)
    //pinned が使える　https://developer.chrome.com/extensions/tabs#type-Tab
    checkval = isCurrentTabPinned;
    debugger
    //alert("this tab is pinned"+ isCurrentTabPinned.toString );
    var isTabFixed = true;
    if(isTabFixed){
      //alert("A alert")
      //タブが固定されていれば新しいタブを作って遷移
      //createTab(url);
    }
  });
});
