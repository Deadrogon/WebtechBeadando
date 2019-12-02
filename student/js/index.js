$(document).ready(function () {
    $("#content").load("content.html");
});

$(document).ready(function () {
    $.each($(".menuButton"), function (mbIndex, mbValue) {
        $(mbValue).click(function (event) {
            event.preventDefault();
            if (!($(this).find('a').attr("href") === "index.html")) {
                $("#content").load($(this).find('a').attr("href"));
            }
            else {
                open("index.html", "_self");
            }
        });
    })
});

function Show(click) {
    var text = document.getElementById(click);
    var x = document.getElementById("Description");
    if (text.firstChild.data === "Click me!")
    {
        text.firstChild.data = "Hide";
        x.style.display = "block";
    }
    else
    {
        text.firstChild.data = "Click me!";
        x.style.display = "none";
    }
}