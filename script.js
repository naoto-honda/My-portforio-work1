$(function() {
  $("#process h3").on("click", function() {
    $(this).next().slideToggle(300);
  });

  $("#question2 div.question-title").on("click", function() {
    $(this).next().slideToggle(300);
  });

  var topBtn = $('#top-btn');
  
  topBtn.hide();

  // スクロールが100に達したらボタン表示
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });

  // スクロールしてトップへ
  topBtn.click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});