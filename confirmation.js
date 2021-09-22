// récupération du contenu du local storage et stockage dans variable mesAchats

let achats = JSON.parse(localStorage.getItem("mesAchats")); // a ajouter au plan de test

console.log(achats);

let mailConfirmation = document.createElement("div");
mailConfirmation.innerHTML = "<div class=\"text-center pb-2\">\
<strong>Bravo !!</strong>\
</div>\
<div class=\"text-center pb-2\">\
Vous avez finalisé votre commande avec succès. <br> ;-) <br>Une confirmation vous a été envoyé à l'adresse email : "+ achats.contact.email +"\
</div>\
<div class=\"text-center pb-2\">\
<a href=\"#\" onclick=\"window.print();return false;\" class=\"alert-link\">imprimer ma facture</a>.\
</div>";

let success = document.getElementById('success');
success.appendChild(mailConfirmation);

// -----
let infosPerso = document.createElement("div");
infosPerso.innerHTML = "<div>Nom : " + achats.contact.lastName +"</div>\
<div>Prénom : " + achats.contact.firstName +"</div>\
<div>Adresse : " + achats.contact.address +"</div>\
<div>Ville : " + achats.contact.city +"</div>";

let recapInfosPerso = document.getElementById('infosPerso');
recapInfosPerso.appendChild(infosPerso);


let articles = JSON.parse(localStorage.getItem("monPanier")); // a ajouter au plan de test
// Création variable ligne du tableau des produits commandés

console.log(articles);
let tableRow = "";
let prixTotal = "";

for (let infos of articles) {
    
    // ---- Creation d'une ligne dans le tableau recapitulatif des achats
    tableRow = tableRow + "<div class=\"border row ligneTab\">\
    <div class=\"col\">"+ infos.nomProduit +"</div>\
    <div class=\"col\">"+ infos.couleurProduit +"</div>\
    <div class=\"col\">"+ infos.quantiteProduit +"</div>\
    <div class=\"col\">"+ infos.prixProduit +"</div>\
    </div>";

    // Calcul du prix total des achats
    prixTotal = Number(prixTotal) + Number(infos.prixProduit);
};

//On crée un élément div
let newLigne = document.createElement("div");
//On ajoute des éléments HTML à la div
newLigne.innerHTML = ""+tableRow+"";


let ligneArticles = document.getElementById("recap");
ligneArticles.appendChild(newLigne); // a ajouter au plan de test

// ----- Calcul du prix total ------

console.log(typeof prixTotal);
let newPrice = document.createElement("span");
newPrice.innerHTML = ""+ prixTotal +" €";
let Prix = document.getElementById("prixTotal");
Prix.appendChild(newPrice);

localStorage.removeItem("monPanier"); // a ajouter au plan de test, verifier que le panier est bien supprimer lorsqu'on passe à la page de confirmation d'achat

