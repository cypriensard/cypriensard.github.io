document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.querySelector(".image_container");
    var videoPartContainerElement = document.querySelector(".video-part-container");
    var whitetransElement = document.getElementById("white-trans");
    var icelandElement = document.querySelector(".video-part-container");
    var bandElement = document.getElementById("first-black-band");
    var wallpaperElement = document.getElementById("wallpaper");

    function ajusterPosition() {
        var bottomAltitude = imageContainer.offsetTop + imageContainer.offsetHeight;
        videoPartContainerElement.style.top = bottomAltitude + "px";
        whitetransElement.style.top = bottomAltitude + "px";

        var topAltitude = icelandElement.offsetTop;
        var hauteurband = icelandElement.offsetHeight;
        var hauteurwallpaper = wallpaperElement.offsetHeight;
        bandElement.style.height = topAltitude + hauteurband - hauteurwallpaper + "px";
    }

    ajusterPosition();

    window.addEventListener('resize', ajusterPosition);
});
