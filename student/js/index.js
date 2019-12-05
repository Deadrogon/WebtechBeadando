$(document).ready(function () {
    $("#content").load("content.html");
});

function loadCar() {
    $("#content").load("addcar.html");
}

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
    if (text.firstChild.data === "Click!")
    {
        text.firstChild.data = "Back!";
        x.style.display = "block";
    }
    else
    {
        text.firstChild.data = "Click!";
        x.style.display = "none";
    }
}