CSS JSResult Skip Results Iframe
EDIT ON
//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
  var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
  $(findElm).slideToggle();//アコーディオンの上下動作
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去し
  }else{//それ以外は
    $(this).addClass('close');//クラス名closeを付与
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
    $('.accordion-area li:first-of-type section').removeClass("open"); // 最初のアコーディオンの open クラスを除去
  
    $(".open").each(function(index, element){
      var Title =$(element).children('.title');
      $(Title).addClass('close');
      var Box =$(element).children('.box');
      if ($(element).hasClass("open")) {
        $(Box).slideDown(500);
      }
    });
  });
  

// // フォトギャラリー
// $('.slider').slick({
//     autoplay: true,//自動的に動き出すか。初期値はfalse。
//     infinite: true,//スライドをループさせるかどうか。初期値はtrue。
//     slidesToShow: 3,//スライドを画面に3枚見せる
//     slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
//     prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
//     nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
//     dots: true,//下部ドットナビゲーションの表示
//     responsive: [
//       {
//       breakpoint: 769,//モニターの横幅が769px以下の見せ方
//       settings: {
//         slidesToShow: 2,//スライドを画面に2枚見せる
//         slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
//       }
//     },
//     {
//       breakpoint: 426,//モニターの横幅が426px以下の見せ方
//       settings: {
//         slidesToShow: 1,//スライドを画面に1枚見せる
//         slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
//       }
//     }
//   ]
//   });