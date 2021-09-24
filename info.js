let url = new URL(window.location);
let params = url.searchParams;
let id = params.get('id');
console.log(id); // à ajouter au plan de test

fetch("http://localhost:3000/api/teddies/"+id) 

.then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
     // on exploite les données : une boucle pour créer les éléments html pour chaque ours
.then(function(infos) {
    let newInfos = document.createElement("div");
    let options = "";
    console.log(infos); // a ajouter au test
    for (let color of infos.colors){
    options = options + "<option value=\""+ color +"\">"+ color +"</option>";
    }

    newInfos.innerHTML = "<h1 class=\"text-center mt-5\">"+ infos.name +"</h1>\
            <div class=\"infoProduct mx-2 pb-5 \">\
            <div class=\"container\">\
            <div class=\"row\">\
            <div class=\"border-primary mb-3 mx-2 px-0\">\
            <img class=\"card-img-top d-block w-300\" src=\""+ infos.imageUrl +"\" alt=\"Photo de l'ours en peluche "+ infos.name +"\">\
            <div class=\"card-body\">\
            <h4 class=\"card-title\">"+ infos.name +"</h4>\
            <p class=\"card-text\"><strong>Description :</strong>"+ infos.description +"</p>\
            <p><strong>Prix :</strong> "+ infos.price +" euros</p>\
            <form name=\"infosForm\" class=\"my-0 pb-4 col-md-6 col-lg-5\">\
            <fieldset>\
            <div class=\"form-group\">\
            <label for=\"selectColor\" class=\"form-label mt-4\">Couleur :</label>\
            <select class=\"form-select couleur\" id=\"selectColor\" name=\"selectColor\" onchange=\"\"><option>Sélectionnez une couleur</option>" + options +
            "</select>\
            </div>\
            <div class=\"form-group\">\
            <label for=\"quantite\" class=\"form-label mt-4\">Quantité :</label>\
            <input type=\"number\" min=\"1\" class=\"form-control\" id=\"quantite\" name=\"quantite\" placeholder=\"Choisissez combien vous en voulez\">\
            </div>\
            </fieldset>\
            </form>\
            <a class=\"lienPanier btn btn-info\" id=\"ajouterAuPanier\">Ajouter au panier</a>\
            </div>\
            </div>\
            </div>\
            </div>\
            </div>"; 
    // dans la page verifier que l'afgfichage correspond bien aux données récolteé

    let infoOurs = document.getElementById('infoOurs');
    // on rajoute le nouvel élément créé à la div infoOurs
    infoOurs.appendChild(newInfos);


//------------------ choix des options ---------------------------------------

    let choixProduit = {
        nomProduit : infos.name,
        imageProduit : infos.imageUrl,
        couleurProduit : "",
        prixProduit : infos.price,
        quantiteProduit : "",
        productId : id
    };

    let choixCouleur = document.getElementById("selectColor");

    choixCouleur.addEventListener('change', (event) => {
    choixProduit.couleurProduit = choixCouleur.options[choixCouleur.selectedIndex].value;
    console.log(choixProduit);
    });

    let quantiteProduit = document.getElementById("quantite");
    
    quantiteProduit.addEventListener('change', (event) => {
        choixProduit.quantiteProduit = quantiteProduit.value;
        console.log(choixProduit);
        });

// ---------------------------------- LOCAL STORAGE ----------------------------------------


    let monPanier = JSON.parse(localStorage.getItem("monPanier"));
    if (! monPanier){
        monPanier = [];
    }

    let ajoutPanier = document.getElementById("ajouterAuPanier");
    ajoutPanier.addEventListener('click', (e) =>{
        function validation(){
         // déclaration de la fonction validation des champs de choix de couleur et de quantité avant l'envoi du panier vers le localstorage
            var couleur = document.forms["infosForm"]["selectColor"]; 
            var quantite = document.forms["infosForm"]["quantite"];

            if (couleur.value == "Sélectionnez une couleur"){
                alert("Choisissez votre couleur");
                couleur.focus(); 
                return false;
            }
            if (quantite.value == ""){
                alert("Choisissez votre quantité");
                quantite.focus(); 
                return false;
            }
            return true;
        }

        if (validation()){ 
        monPanier.push(choixProduit);
        localStorage.setItem("monPanier", JSON.stringify(monPanier));
        let ajoutAttribut = document.getElementById("ajouterAuPanier")
        ajoutAttribut.setAttribute("href","panier.html");
        }
    });

    // à ajouter pour savoir si on a bien récupéré dans le local storage, on stocke bien les infos de l'ours, et vérifier que les différents ours que l'on a séléectionné s'accumulent bien

})

.catch(function(err) {
    console.log(err);
  });
