// Script de base
console.log("Le script JS est bien chargé !");

// Fonction pour afficher un message
function afficherMessage() {
  alert("Bonjour ! Ce message vient du fichier JS 😄");
}

// Attacher un événement sur le bouton
document.addEventListener("DOMContentLoaded", function () {
  const bouton = document.getElementById("monBouton");
  if (bouton) {
    bouton.addEventListener("click", afficherMessage);
  }
});
