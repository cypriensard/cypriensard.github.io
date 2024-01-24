document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.querySelector(".image_container");
    var videoPartContainerElement = document.querySelector(".video-part-container");
    var whitetransElement = document.getElementById("white-trans"); 

    function ajusterPosition() {
        // Obtenez l'altitude du bas de l'élément par rapport à son parent
        var bottomAltitude = imageContainer.offsetTop + imageContainer.offsetHeight;

        // Ajustez le style de l'élément "video-part-container" en utilisant l'altitude du bas de la classe "image_container"
        videoPartContainerElement.style.top = bottomAltitude + "px";
        whitetransElement.style.top = bottomAltitude + "px";
    }

    // Appelez la fonction initiale pour définir la position initiale
    ajusterPosition();

    // Ajoutez un écouteur d'événements de redimensionnement
    window.addEventListener('resize', ajusterPosition);
});


document.addEventListener("DOMContentLoaded", function() {

    var icelandElement = document.querySelector(".video-part-container");
    var bandElement = document.getElementById("first-black-band");
    var wallpaperElement = document.getElementById("wallpaper");  

    
    function ajusterPosition() {
        // Obtenez l'altitude du bas de l'élément par rapport à son parent
        var topAltitude = icelandElement.offsetTop ;
        var hauteurband = icelandElement.offsetHeight;
        var hauteurwallpaper = wallpaperElement.offsetHeight;

        // Ajustez le style de l'élément "Iceland" en utilisant l'altitude du bas de la classe "image_container"
        bandElement.style.height = topAltitude + hauteurband - hauteurwallpaper + "px";


    }

    // Appelez la fonction initiale pour définir la position initiale
    ajusterPosition();

    // Ajoutez un écouteur d'événements de redimensionnement
    window.addEventListener('resize', ajusterPosition);
});

