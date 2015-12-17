var url;
$(function(){
  //リンクがクリックされた
  $('a').mousedown(function(){
    a = $('a').attr('href');
    alert(a);
    url = "aa//aaa";
    alert(url);
    //多分ここでエスケープさせる必要がある
    chrome.runtime.sendMessage({
      url: url,
    },function(response){
      if(response){
        alert("tab pinned!")
      }else{
        alert("tab not pinned")
      }
    });

    var isTabFixed = true;
    if(isTabFixed){
      //alert("A alert")
      //タブが固定されていれば新しいタブを作って遷移
      //createTab(url);
    }
  });
});
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {

// });
