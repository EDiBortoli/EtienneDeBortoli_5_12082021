
// récupération du contenu du local storage et stockage dans variable monPanier

let panier = JSON.parse(localStorage.getItem("monPanier"));
    if (! panier){
        panier = [];
    }

// Visualisation du contenu de "panier"
console.log(panier);

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
      <td>\
      <div class=\"form-check\">\
      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"checkBox\">\
      </div>\
      </td>\
      </tr>";
  };
      //On crée un élément div
      let newLigne = document.createElement("div");
      //On ajoute des éléments HTML à la div
      //Ici ajouter les éléments tirés des données de chaque ours : nom, url de l'image, prix, description 
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
  //};


//nomProduit : infos.name,
  //          imageProduit : infos.imageUrl,
    //        couleurProduit : "",
      //      prixProduit : infos.price,
        //    quantiteProduit : ""

