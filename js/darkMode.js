// window
// 	.matchMedia("(prefers-color-scheme: dark)")
// 	.addEventListener("change", function (e) {
//         const colorScheme = e.matches ? "dark" : "light";
//         if (colorScheme === "dark") {
//             $(".container").addClass("dark-mode");
// 		} else {
//             $(".container").removeClass("dark-mode");
// 		}
//     });
$(".header__dark-mode-toggler").click(function(){
    $(".header").addClass("header--dark-mode-animated").toggleClass("header--turning-dark-mode");
    setTimeout(function(){$(".container").toggleClass("dark-mode")}, 800);
    setTimeout(function(){$(".header").removeClass("header--dark-mode-animated")}, 2500);
});