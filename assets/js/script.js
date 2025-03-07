$(document).ready(function () {
    $("#addNewDisposal").click(function(){
        $(".disposal-add-modal").fadeIn();
    })

    $(".disposal-modal-close").click(function () {
        $("#disposal-add-modal").fadeOut();
    });

    $(window).click(function (event) {
        if (event.target.id === "disposal-add-modal") {
            $("#disposal-add-modal").fadeOut();
        }
    });



    $(".updateİcon").click(function(){
        $(".disposal-update-modal").fadeIn();
    })


    $(".disposal-update-modal-close").click(function () {
        $("#disposal-update-modal").fadeOut();
    });


    $(window).click(function (event) {
        if (event.target.id === "disposal-update-modal") {
            $("#disposal-update-modal").fadeOut();
        }
    });
});