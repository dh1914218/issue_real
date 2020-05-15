var lnb = $(".header").offset().top;
$(window).scroll(function () {
  var window = $(this).scrollTop();

  if (500 <= window) {
    $(".header").addClass("fixed");
    $(".header").slideDown(3000);
  } else {
    $(".header").removeClass("fixed");
  }
});

$(".m-nav__btn").click(function () {
  $(".m-nav").animate({
    "margin-left": 0,
  });
  $(".background-black-cover").show();
});
//   alert(1);

/*----배경화면 검은색 눌렀을시-----*/

$(".background-black-cover").click(function () {
  $(this).hide();
  $(".m-nav").animate({
    "margin-left": "-100%",
  });
  $(".pop-up__commnet-write").hide();
});

/*--------이슈태그 디테일뷰--------*/

// 이슈태그 글쓰기 버튼 클릭시
$(".commnet-btn__write").click(function () {
  $(".pop-up__commnet-write").show();
  $(".background-black-cover").show();
});

// 이슈태그 글쓰기레이어 팝업에서 취소버튼 눌렀을시
$(".pop-up__commnet-write .cancel").click(function () {
  $(".pop-up__commnet-write").hide();
  $(".background-black-cover").hide();
});
