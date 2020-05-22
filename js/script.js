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

$(document).ready(function () {
  var jbOffset = $(".aside").offset();
  $(window).scroll(function () {
    if ($(document).scrollTop() > jbOffset.top) {
      $(".aside").addClass("aside-fixed");
    } else {
      $(".aside").removeClass("aside-fixed");
    }
  });
});

// var aside = $(".aside").offset().top;
// $(windon).scroll(function () {
//   var window = $(this).scrollTop();

//   if (aside <= window) {
//     $(".aside").addClass("fixed");
//   } else {
//     $(".aside").removeClass("fixed");
//   }
// });

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
  $(".pop-up__commnet-view").hide();
  $("body").css("overflow", "visible");
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

// 이슈태그 댓글보기 클릭시 팝업창 생성
$(".commnet-add-btn").click(function () {
  $(".pop-up__commnet-view").show();
  $(".background-black-cover").show();
  $("body").css("overflow", "hidden");
});

$(".pop-up__commnet-view .pop-up__header button").click(function () {
  $(".pop-up__commnet-view").hide();
  $(".background-black-cover").hide();
  $("body").css("overflow", "visible");
});

$(".commnet-article").scrollTop($(".commnet-article")[0].scrollHeight);
