// ── Lien actif dans la nav ────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    var currentPage = window.location.pathname.split('/').pop();
    var liens = document.querySelectorAll('.lien');
    for (var i = 0; i < liens.length; i++) {
        var href = liens[i].getAttribute('href');
        if (href && href.includes(currentPage) && currentPage !== '') {
            liens[i].classList.add('active');
        }
    }
});

// ── Recherche de formation ────────────────────────────────────
var barreRecherche  = document.getElementById('barre-recherche');
var sectionResultat = document.getElementById('resultat-formation');
var messageVide     = document.getElementById('message-vide');

if (barreRecherche) {
    var debounceTimer;

    barreRecherche.addEventListener('input', function(e) {
        clearTimeout(debounceTimer);
        var valeur = e.target.value;
        debounceTimer = setTimeout(function() {
            rechercherFormation(valeur);
        }, 250);
    });

    function rechercherFormation(saisie) {
        var terme = saisie.toLowerCase().trim();

        if (terme.length < 2) {
            sectionResultat.style.display = 'none';
            messageVide.style.display     = 'block';
            messageVide.textContent       = "Saisissez le nom d'une formation pour voir les détails.";
            return;
        }

        fetch('../DATA/Formation.json')
            .then(function(reponse) { return reponse.json(); })
            .then(function(listeFormations) {
                var formationTrouvee = null;
                for (var i = 0; i < listeFormations.length; i++) {
                    if (listeFormations[i].nom.toLowerCase().includes(terme)) {
                        formationTrouvee = listeFormations[i];
                        break;
                    }
                }
                if (formationTrouvee) {
                    afficherFormation(formationTrouvee);
                } else {
                    sectionResultat.style.display = 'none';
                    messageVide.style.display     = 'block';
                    messageVide.textContent       = 'Aucune formation trouvée pour « ' + saisie + ' ».';
                }
            })
            .catch(function(erreur) {
                console.error('Erreur lors du chargement des formations :', erreur);
                messageVide.textContent = 'Impossible de charger les formations.';
            });
    }

    function afficherFormation(formation) {
        sectionResultat.style.display = 'block';
        messageVide.style.display     = 'none';

        document.getElementById('nom-formation').textContent     = formation.nom;
        document.getElementById('description-texte').textContent = formation.description;

        var corpsTableau = document.getElementById('corps-tableau');
        var html = '';
        for (var i = 0; i < formation.responsables.length; i++) {
            var resp = formation.responsables[i];
            html += '<tr>';
            html += '<td><img src="' + resp.photo + '" alt="Photo de ' + resp.nom + '"></td>';
            html += '<td><strong>' + resp.nom + '</strong></td>';
            html += '<td>' + resp.role + '</td>';
            html += '<td><a href="mailto:' + resp.contact + '">' + resp.contact + '</a></td>';
            html += '</tr>';
        }
        corpsTableau.innerHTML = html;
    }
}

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