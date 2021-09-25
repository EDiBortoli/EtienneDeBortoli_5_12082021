
// récupération du contenu du local storage et stockage dans variable panier

let panier = JSON.parse(localStorage.getItem("monPanier"));
if (! panier){
    panier = [];
}

// Visualisation du contenu de "panier"
console.log(panier); 

// Création variable ligne du tableau des produits du panier
let tableRow = "";

for (let ligne of panier) {

    tableRow = tableRow + "<tr>\
    <th scope=\"row\">" + ligne.nomProduit + "</th>\
    <td>\
    <img class=\"card-img-top d-block\" src=\"" + ligne.imageProduit + "\" alt=\"Photo de l'ours en peluche "+ ligne.nomProduit + "\">\
    </td>\
    <td>" + ligne.couleurProduit +"</td>\
    <td>" + ligne.prixProduit + " Euros</td>\
    <td>" + ligne.quantiteProduit +"</td>\
    </tr>";
};
//On crée un élément div
let newLigne = document.createElement("div");
//On ajoute des éléments HTML à la div
newLigne.innerHTML = "<table class=\"table table-hover\">\
<thead>\
  <tr>\
    <th scope=\"col\">Nom</th>\
    <th scope=\"col\">Photo</th>\
    <th scope=\"col\">Couleur</th>\
    <th scope=\"col\">Prix</th>\
    <th scope=\"col\">Quantité</th>\
  </tr>\
</thead>\
<tbody>" + tableRow + "</tbody></table>";
// On récupère la div avec l'id ligneOurs (celle dans laquelle on doit mettre les "cartes" d'ours)
let lignePanier = document.getElementById('recap');
// on rajoute le nouvel élément créé à la div lignePanier
lignePanier.appendChild(newLigne); 


// Creation d'un bouton vider le panier et rechargement de la page actuelle
let viderPanier = document.getElementById("viderPanier");
viderPanier.addEventListener('click', (e) => {
  localStorage.removeItem("monPanier");
  document.location.reload();
});

let envoiPanier = document.getElementById("confirmezAchat");
envoiPanier.addEventListener('click', (e) =>{
  // Validation du formulaire avec une fonction validation()
  function validation()                                    
  { 
      var nom = document.forms["contactForm"]["nom"]; 
      var prenom = document.forms["contactForm"]["prenom"];              
      var email = document.forms["contactForm"]["email"];     
      var adresse = document.forms["contactForm"]["adresse"];  
      var ville = document.forms["contactForm"]["ville"]; 
      let regMail = new RegExp("^[A-Za-z][0-9A-Za-z-_\.]+@[0-9A-Za-z-_\.]+\.[A-Za-z]{2,}$","g");
      let testEmail = !regMail.test(email.value);

      if (nom.value == "")                                  
      { 
          alert("Indiquez votre nom."); 
          nom.focus(); 
          return false; 
      }
      if (prenom.value == "")                                  
      { 
          alert("Indiquez votre prénom."); 
          prenom.focus(); 
          return false; 
      }  
      if (adresse.value == "")                               
      { 
          alert("Indiquez votre adresse."); 
          adresse.focus(); 
          return false; 
      }        
      if (email.value == "")                                   
      { 
          alert("Indiquez une adresse email."); 
          email.focus(); 
          return false; 
      }    
      if (testEmail)                
      { 
          alert("Indiquez une adresse email valide."); 
          email.focus(); 
          return false; 
      }
      if (ville.value == "")                  
      { 
          alert("Indiquez votre ville."); 
          ville.focus(); 
          return false; 
      } 
      return true; 
      
  }
  // Appel de la fonction validation si true
  if (validation()){
    
    let nomForm = document.getElementById("nom").value;
    let prenomForm = document.getElementById("prenom").value;
    let emailForm = document.getElementById("email").value;
    let adresseLivraisonForm = document.getElementById("adresseLivraison").value;
    let villeForm = document.getElementById("ville").value;

    // création de la variable contact contenant les informations du formulaire rempli par l'utilisateur avec les noms de variables corrects pour envoi vers le serveur
    let contact = {
      firstName : nomForm,
      lastName : prenomForm,
      email : emailForm,
      address : adresseLivraisonForm,
      city : villeForm
    }

    //console.log(JSON.stringify(contact));

    let productList = [];
    for(let ours of panier){
      productList.push(ours.productId);
    }

    let jsonBody = {
      contact : contact,
      products : productList,
      detail : panier
    }

    //console.log(JSON.stringify(jsonBody));

    fetch("http://localhost:3000/api/teddies/order", {
      method: "POST",
      headers: { 
      'Accept': 'application/json', 
      'Content-Type': 'application/json' 
      },
      body: JSON.stringify(jsonBody)
    })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })

    .then(function(value) {
      console.log(value);

      // creation d'un nouveau storage avec le contenu de value
      localStorage.removeItem("mesInfos");
      localStorage.setItem("mesInfos", JSON.stringify(value));
    })
    .catch(function(err) {
      // Une erreur est survenue
      console.log(err);
    })

    // création d'un attribut href dans la balise a pour accéder à la page de confirmation
    let lien = document.getElementById("confirmezAchat");

    lien.setAttribute("href", "confirmation.html");
  }
});