$(document).ready(function () {
    document.querySelector("#date_field").value = new Date().toISOString().substr(0, 10);
});

$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();

        $.ajax({
            type:'post',
            url: 'addManufacturers',
            data: $('form').serialize(),
            success: function () {
                if (confirm("Great! You succesfully added a manufacturer. Click ok to see all of them!")) {
                    $("#content").load("listmanufacturers.html");
                }
            },
            error: function () {
                window.alert("Submission failed!");
            }
        })
    })
});