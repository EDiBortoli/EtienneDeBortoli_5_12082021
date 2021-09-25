// récupération du contenu du local storage et stockage dans variable userInfos
let userInfos = JSON.parse(localStorage.getItem("mesInfos"));
//console.log(userInfos);

// Création message de confirmation de commande
let mailConfirmation = document.createElement("div");
mailConfirmation.innerHTML = "<div class=\"text-center pb-2\">\
<strong>Bravo !!</strong>\
</div>\
<div class=\"text-center pb-2\">\
Vous avez finalisé votre commande avec succès. <br> ;-) <br>Une confirmation vous a été envoyé à l'adresse email : "+ userInfos.contact.email +"\
</div>\
<div class=\"text-center pb-2\">\
<a href=\"#\" onclick=\"window.print();return false;\" class=\"alert-link\">imprimer ma facture</a>.\
</div>";

// Ajout du nouveau code HTML dans la balise ayant pour Id "success"
let success = document.getElementById('success');
success.appendChild(mailConfirmation);

// Création du récapitulatif des informations personnelles de l'acheteur
let infosPerso = document.createElement("div");
infosPerso.innerHTML = "<div>Nom : " + userInfos.contact.lastName +"</div>\
<div>Prénom : " + userInfos.contact.firstName +"</div>\
<div>Adresse : " + userInfos.contact.address +"</div>\
<div>Ville : " + userInfos.contact.city +"</div>";

// Ajout du nouveau code HTML dans la balise ayant pour Id "infosPerso"
let recapInfosPerso = document.getElementById('infosPerso');
recapInfosPerso.appendChild(infosPerso);


let articles = JSON.parse(localStorage.getItem("monPanier"));
console.log(articles);

// Création variable ligne du tableau des produits commandés et prix total
let tableRow = "";
let prixTotal = "";

// Création boucle for reprenant les informations de chaque produit commandé
for (let infos of articles) {
    
    // ---- Creation d'une ligne dans le tableau recapitulatif des achats
    tableRow = tableRow + "<div class=\"border row ligneTab\">\
    <div class=\"col\">"+ infos.nomProduit +"</div>\
    <div class=\"col\">"+ infos.couleurProduit +"</div>\
    <div class=\"col\">"+ infos.quantiteProduit +"</div>\
    <div class=\"col\">"+ infos.prixProduit +"</div>\
    </div>";

    // Calcul du prix total des achats
    prixTotal = Number(prixTotal) + Number(infos.prixProduit) * Number(infos.quantiteProduit);
};

// ----- Tableau récapitulatif des achats ------
// Création de la div contenant le code HTML du tableau récapitulatif des achats
let newLigne = document.createElement("div");
newLigne.innerHTML = ""+tableRow+"";

// Ajout du nouveau code HTML dans la balise ayant pour Id "recap"
let ligneArticles = document.getElementById("recap");
ligneArticles.appendChild(newLigne); 
// a ajouter au plan de test

// ----- Calcul du prix total ------
// Création d'un span contenant le code HTML du prix total
let newPrice = document.createElement("span");
newPrice.innerHTML = ""+ prixTotal +" €";
// Ajout du nouveau code HTML dans la balise ayant pour Id "prixTotal"
let Prix = document.getElementById("prixTotal");
Prix.appendChild(newPrice);

localStorage.removeItem("monPanier"); // a ajouter au plan de test, verifier que le panier est bien supprimer lorsqu'on passe à la page de confirmation d'achat

