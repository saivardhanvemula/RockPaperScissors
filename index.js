$(".op").click(function () {
    $(".op").addClass("deselect");
    $(this).removeClass("deselect");
    $(this).addClass("select");
    $(".player img").addClass("shake");
    // setTimeout(function () {
    //     $(".player img").attr("src", "./assets/" + $(this).text() + ".png");
    // }, 3000);

    setTimeout(function () {
        $(".op").removeClass("deselect select");
    }, 3000);

    $(".player img").removeClass("shake");
});
// function play() {
//     setInterval(() => {
//         $(".player>img").slideup()
//     }, 1000);
// }
