CSS JSResult Skip Results Iframe
EDIT ON
//アコーディオンをクリックした時の動作
$('.title').on('click', function() {
  var findElm = $(this).next(".box");
  $(findElm).slideToggle();

  if($(this).hasClass('close')){
    $(this).removeClass('close');/
  }else{
    $(this).addClass('close');
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
    $('.accordion-area li:first-of-type section').removeClass("open"); 
  
    $(".open").each(function(index, element){
      var Title =$(element).children('.title');
      $(Title).addClass('close');
      var Box =$(element).children('.box');
      if ($(element).hasClass("open")) {
        $(Box).slideDown(500);
      }
    });
  });

//ブログ

  $(document).ready(function() {
    $(".blog-link-button").click(function(e) {
      e.preventDefault(); 
      var url = $(this).attr("href");
      window.open(url, "_blank"); 
    });
  });


//blogボタン効果
$(document).ready(function() {
  $(".blog-link-button").click(function() {
      var $img = $(this).find(".blog-icon");
      $img.animate({
          marginTop: "5px"  
      }, 200); 
  });
});
