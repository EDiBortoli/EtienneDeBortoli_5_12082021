// commentaires
//let h4Ours = document.getElementById('ours1');
//h4Ours.innerHTML = "Mon Ours Norbert";
//On crée un élément div
//let newElt = document.createElement("div");
//On lui ajoute des classes
//newElt.classList.add("card");
//newElt.classList.add("border-primary");
//newElt.classList.add("mb-3");
//newElt.classList.add("mx-2");
//newElt.classList.add("px-0");
//On ajoute des éléments HTML à la div
//Ici ajouter les éléments tirés des données de chaque ours : nom, url de l'image, prix, description 
//let imageUrl = "../JWDP5/images/teddy_1.jpg";
//newElt.innerHTML = "<img class=\"card-img-top d-block w-100\" src=\""+ imageUrl + "\" alt=\"Photo de l'ours en peluche Norbert\">\
            //<div class=\"card-body\">\
              //<h4 id=\"ours1\" class=\"card-title\">Norbert</h4>\
              //<p class=\"card-text\">Ours en peluche fait à la main. <br>Prix : 2900 euros</p>\
              //<a href=\"info.html?id=ours1\" class=\"stretched-link\"></a>\
            //</div>";
// On récupère la div avec l'id ligneOurs (celle dans laquelle on doit mettre les "cartes" d'ours)
//let ligneOurs = document.getElementById('ligneOurs');
// on rajoute le nouvel élément créé à la div ligneOurs
//ligneOurs.appendChild(newElt);

//récupération des données
fetch("http://localhost:3000/api/teddies")
//On vérifie si on a bien récupéré les données
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
     // on exploite les données : une boucle pour créer les éléments html pour chaque ours
  .then(function(value) {
    for (let infos of value) {
        //On crée un élément div
        let newElt = document.createElement("div");
        //On lui ajoute des classes
        newElt.classList.add("card");
        newElt.classList.add("border-primary");
        newElt.classList.add("mb-3");
        newElt.classList.add("mx-2");
        newElt.classList.add("px-0");
        //On ajoute des éléments HTML à la div
        //Ici ajouter les éléments tirés des données de chaque ours : nom, url de l'image, prix, description 
        newElt.innerHTML = "<img class=\"card-img-top d-block w-150\" src=\""+ infos.imageUrl + "\" alt=\"Photo de l'ours en peluche "+ infos.name +"\">\
                    <div class=\"card-body\">\
                    <h4 id=\"ours1\" class=\"card-title\">"+ infos.name +"</h4>\
                    <p class=\"card-text\">"+ infos.description +"</p><p class=\"card-text\">Prix : "+ infos.price +" euros</p>\
                    <a href=\"info.html?id=ours1\" class=\"stretched-link\"></a>\
                    </div>";
        // On récupère la div avec l'id ligneOurs (celle dans laquelle on doit mettre les "cartes" d'ours)
        let ligneOurs = document.getElementById('ligneOurs');
        // on rajoute le nouvel élément créé à la div ligneOurs
        ligneOurs.appendChild(newElt);
     }
  })
     // en cas d'erreur
  .catch(function(err) {
      // Une erreur est survenue
  });

  //Exemple pour récupérer l'id en Javascript : 
  //let url = new URL(window.location);
  //let params = new URLSSearchParams(url.search);
  //let id = params.get('id');