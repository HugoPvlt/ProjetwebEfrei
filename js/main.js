document.addEventListener('DOMContentLoaded', function() {
    // prend en valeur les différents éléments de la page 

    var barreRecherche  = document.getElementById('barre-recherche');
    var sectionResultat = document.getElementById('resultat-formation');
    var messageVide     = document.getElementById('message-vide');

    if (barreRecherche) {
        var debounceTimer;

        barreRecherche.addEventListener('input', function(e) {
    rechercherFormation(e.target.value);
});
        function rechercherFormation(saisie) {
            var terme = saisie.toLowerCase().trim();// évite la casse en les changeant en minuscule

            if (terme.length < 2) {// obligé de saisir au moins 2 caractères
                sectionResultat.style.display = 'none';
                messageVide.style.display = 'block';
                messageVide.textContent = "Saisissez le nom d'une formation pour voir les détails.";
                return;
            }

            fetch('../DATA/Formation.json')// recherche dans le json du nom de la formation 
                
                .then(function(listeFormations) {
                    var resultats = listeFormations.filter(function(f) {
                        return f.nom.toLowerCase().includes(terme);// prend toutes les formation qui contient le mot entrer par l'utilisateur
                    });

                    if (resultats.length > 0) {
                        afficherListeFormations(resultats);
                    } else {
                        sectionResultat.style.display = 'none';
                        messageVide.style.display = 'block';
                        messageVide.textContent = 'Aucune formation trouvée pour « ' + saisie + ' ».';
                    }
                })
                .catch(function(erreur) {
                    console.error(erreur);
                });
        }

        function afficherListeFormations(formations) {// permet d'afficher la recherche en html CSS
            sectionResultat.style.display = 'block';
            messageVide.style.display = 'none';
            sectionResultat.innerHTML = ''; 

            formations.forEach(function(formation) {
                var divFormation = document.createElement('div');
                divFormation.style.marginBottom = "40px";
                divFormation.style.borderBottom = "1px solid #ccc";
                divFormation.style.paddingBottom = "20px";
                
                var html = '<h2>' + formation.nom + '</h2>';
                html += '<div class="description-container"><h3>Description</h3><p>' + formation.description + '</p></div>';
                html += '<h3>Responsables</h3>';
                html += '<table class="table-responsables"><thead><tr><th>Photo</th><th>Nom</th><th>Rôle</th><th>Contact</th></tr></thead><tbody>';

                formation.responsables.forEach(function(resp) {
                    html += '<tr>';
                    html += '<td><img src="' + resp.photo + '" alt="Photo" style="width:50px; border-radius:50%;"></td>';
                    html += '<td><strong>' + resp.nom + '</strong></td>';
                    html += '<td>' + resp.role + '</td>';
                    html += '<td><a href="mailto:' + resp.contact + '">' + resp.contact + '</a></td>';
                    html += '</tr>';
                });

                html += '</tbody></table>';
                divFormation.innerHTML = html;
                sectionResultat.appendChild(divFormation);
            });
        }
    }
});

function envoyerMessage() {
    var prenom  = document.getElementById('prenom').value.trim();
    var email   = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    if (!prenom || !email || !message) {
        alert('Veuillez remplir au minimum votre prénom, email et message.');
        return;
    }
    alert('Merci ' + prenom + ' ! Votre message a bien été envoyé.');
}