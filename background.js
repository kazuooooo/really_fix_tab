$(function(){
  alert("hello")
  $('a').mousedown(function(){
  alert($(this).attr('href'));
  });
});
