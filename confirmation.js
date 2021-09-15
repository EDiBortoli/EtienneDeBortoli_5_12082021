// récupération du contenu du local storage et stockage dans variable mesAchats

let achats = JSON.parse(localStorage.getItem("mesAchats"));

console.log("mesAchats");

// Création variable ligne du tableau des produits du panier
let tableRow = "";

for (let infos of achats) {

    let mailConfirmation = document.createElement("div");
    mailConfirmation.innerHTML = "<div class=\"text-center pb-2\">\
    <strong>Bravo !!</strong>\
  </div>\
  <div class=\"text-center pb-2\">\
    Vous avez finalisé votre commande avec succès. <br> ;-) <br>Une confirmation vous a été envoyé à l'adresse email : "+ infos.email +"\
  </div>\
  <div class=\"text-center pb-2\">\
    <a href=\"#\" class=\"alert-link\">imprimer ma facture</a>.\
  </div>";

    let success = document.getElementById('success');
    success.appendChild(mailConfirmation);

    tableRow = tableRow + "";
};
    //On crée un élément div
    let newLigne = document.createElement("div");
    //On ajoute des éléments HTML à la div
    newLigne.innerHTML = "";

 
    let ligneAchats = document.getElementById('recap');
    ligneAchats.appendChild(newLigne);
//};