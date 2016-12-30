$(document).ready(function () {
    $("td[colspan='2']").click(function () {
        $(".down").fadeToggle("2000");
        $(this).show();
    });
});