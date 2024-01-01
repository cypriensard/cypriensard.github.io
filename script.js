
function change(valeur)
{
  var changer = document.getElementById(valeur);

  if (changer.style.visibility == 'hidden')
  {
  changer.style.visibility = 'visible';
  }
  else
  {
  changer.style.visibility = 'hidden';
  }
};


document.addEventListener("DOMContentLoaded", function() {
    var top_position = document.getElementById("citation").offsetTop;
    
    // Utilisez getElementsByClassName pour sélectionner l'élément avec la classe "image_container"
    var imageContainers = document.getElementsByClassName("image_container");
    
    // Vérifiez s'il y a au moins un élément avec la classe "image_container"
    if (imageContainers.length > 0) {
        // Accédez au premier élément de la collection et définissez le style
        imageContainers[0].style.top = top_position + 500 + "px";
    }
});


document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.querySelector('.image_container');
    var icelandElement = document.getElementById("Iceland");
    var whitetransElement = document.getElementById("white-trans"); 

    
    function ajusterPosition() {
        // Obtenez l'altitude du bas de l'élément par rapport à son parent
        var bottomAltitude = imageContainer.offsetTop + imageContainer.offsetHeight;

        // Ajustez le style de l'élément "Iceland" en utilisant l'altitude du bas de la classe "image_container"
        icelandElement.style.top = bottomAltitude + 50 + "px";
        whitetransElement.style.top = bottomAltitude + 50  + "px";

    }

    // Appelez la fonction initiale pour définir la position initiale
    ajusterPosition();

    // Ajoutez un écouteur d'événements de redimensionnement
    window.addEventListener('resize', ajusterPosition);
});

document.addEventListener("DOMContentLoaded", function() {

    var icelandElement = document.getElementById("Iceland");
    var videosElement = document.getElementById("video-container"); 

    
    function ajusterPosition() {
        // Obtenez l'altitude du bas de l'élément par rapport à son parent
        var topAltitude = icelandElement.offsetTop ;
        var height = icelandElement.offsetHeight;


        // Ajustez le style de l'élément "Iceland" en utilisant l'altitude du bas de la classe "image_container"
        videosElement.style.top = topAltitude + 0.4*height + "px";


    }

    // Appelez la fonction initiale pour définir la position initiale
    ajusterPosition();

    // Ajoutez un écouteur d'événements de redimensionnement
    window.addEventListener('resize', ajusterPosition);
});

document.addEventListener("DOMContentLoaded", function() {

    var icelandElement = document.getElementById("Iceland");
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

