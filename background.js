$(function(){
  //リンクがクリックされた
  $('a').mousedown(function(){
    //alert($(this).attr('href'));
    //タブの状態を取得（多分別スクリプト)
    //pinned が使える　https://developer.chrome.com/extensions/tabs#type-Tab
    var isTabFixed = true;
    if(isTabFixed){
      alert("tab fixed")
      //タブが固定されていれば新しいタブを作って遷移
      //createTab(url);
    }
  });
});
