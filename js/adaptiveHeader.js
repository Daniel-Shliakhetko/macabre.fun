resize();
$(".header__menu-toggler").click(function () {
  $(".header__menu-toggler").toggleClass("header__menu-toggler--open");
  $(".header__menu").toggle("slow");
});
function resize() {
  $(window).width() > 768
    ? $(".header__menu").show()
    : $(".header__menu").hide();
}
$(window).resize(function () {
  resize();
});
