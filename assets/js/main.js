//ハンバーガー
$(document).ready(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
      $('.navigation').slideToggle(300);
      $('.hamburger-menu').toggleClass('hamburger-menu--open');
  });
});

// トップへ戻るボタンのクリックイベント
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}

$('#js-to-top-button').on('click', function () {
  scrollToTop();
});

