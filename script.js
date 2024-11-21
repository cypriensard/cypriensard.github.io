function scrollToImageContainer() {
    // Faire défiler la page jusqu'au conteneur d'image
    document.querySelector('.image_container').scrollIntoView({ behavior: 'smooth' });
  }

document.addEventListener("scroll", () => {
    const element = document.getElementById("wallpaper");
    const hauteur = window.innerHeight * 0.95
    // Vérifie si la page a été scrollée de plus de 100 pixels
    if (window.scrollY > hauteur) {
        element.style.display = "none"; // Fait disparaître l'élément
    } else {
        element.style.display = "block"; // Le réaffiche si l'utilisateur remonte
    }
});
