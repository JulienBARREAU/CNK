// Récupération de la liste des liens de navigation
const navLinks = document.querySelectorAll('nav ul li a');

// Ajout d'un gestionnaire d'événement pour chaque lien de navigation
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();

    // Ajout de la classe "active" à l'élément cliqué
    this.classList.add('active');

    // Suppression de la classe "active" de tous les autres éléments
    navLinks.forEach(otherLink => {
      if (otherLink !== this) {
        otherLink.classList.remove('active');
      }
    });

    // Chargement du contenu de cnkaccueil.html et mise à jour de l'élément "content"
    fetch("cnkaccueil.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("content").innerHTML = data;
      });
  });
});
