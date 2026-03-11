    const barreRecherche = document.getElementById('barre-recherche');
    const sectionResultat = document.getElementById('resultat-formation');
    const messageVide = document.getElementById('message-vide');

    if (barreRecherche) {
        barreRecherche.addEventListener('input', async (e) => {
            const saisie = e.target.value.toLowerCase().trim();

            try {
                const reponse = await fetch('../DATA/Formation.json');
                const listeFormations = await reponse.json();

                const formationTrouvee = listeFormations.find(f => 
                    f.nom.toLowerCase().includes(saisie)
                );

                if (saisie.length > 2 && formationTrouvee) {
                    sectionResultat.style.display = 'block';
                    messageVide.style.display = 'none';

                    document.getElementById('nom-formation').textContent = formationTrouvee.nom;
                    document.getElementById('description-texte').textContent = formationTrouvee.description;

                    const corpsTableau = document.getElementById('corps-tableau');
                    corpsTableau.innerHTML = formationTrouvee.responsables.map(resp => `
                        <tr>
                            <td>${resp.nom}</td>
                            <td><a href="mailto:${resp.contact}">${resp.contact}</a></td>
                            <td>${resp.role}</td>
                            <td><img src="${resp.photo}" alt="Photo" style="width:50px; border-radius:5px;"></td>
                        </tr>
                    `).join('');

                } else {
                    sectionResultat.style.display = 'none';
                    messageVide.style.display = 'block';
                }

            } catch (erreur) {
                console.error(erreur);
            }
        });
    }