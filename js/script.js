$(".m-nav__btn").click(function () {
  $(".m-nav").animate({
    "margin-left": 0,
  });
  $(".background-black-cover").show();
});
//   alert(1);

$(".background-black-cover").click(function () {
  $(this).hide();
  $(".m-nav").animate({
    "margin-left": "-100%",
  });
});

$(".commnet-btn__write").click(function () {
  $(".pop-up__commnet-write").show();
});
