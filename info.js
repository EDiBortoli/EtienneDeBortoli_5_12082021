let url = new URL(window.location);
let params = url.searchParams;
let id = params.get('id');

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

        for (let color of infos.colors){
        options = options + "<option>"+ color +"</option>";
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
                <form class=\"my-0 pb-4 col-md-6 col-lg-5\">\
                <fieldset>\
                <div class=\"form-group\">\
                <label for=\"selectColor\" class=\"form-label mt-4\">Choisissez votre couleur :</label>\
                <select class=\"form-select\" id=\"selectColor\" onchange=\"choixCouleur()\"><option>Sélectionnez une couleur</option>" + options +
                "</select>\
                </div>\
                </fieldset>\
                </form>\
                <a class=\"lienPanier btn btn-info\" href=\"panier.html\">Ajouter au panier</a>\
                </div>\
                </div>\
                </div>\
                </div>\
                </div>"; 
        

        let infoOurs = document.getElementById('infoOurs');
        // on rajoute le nouvel élément créé à la div infoOurs
        infoOurs.appendChild(newInfos);

//------------------ choix de la couleur ---------------------------------------

        //let choixCouleur = document.getElementById("selectColor");

        //let coul = document.getElementById("selectColor").value;
        //    console.log(coul);
        

        let choixProduit = {
            nomProduit : infos.name,
            imageProduit : infos.imageUrl,
            couleurProduit : coul.value,
            prixProduit : infos.price,
            quantiteProduit : 2
        }
        //console.log(choixProduit);
    });

// ---------------------------------- LOCAL STORAGE ----------------------------------------

    let monPanier = localStorage

    function ajouterAuPanier {
        localStorage.setItem(choixProduit);
    };

    console.log(localStorage);
    console.log(choixProduit);
