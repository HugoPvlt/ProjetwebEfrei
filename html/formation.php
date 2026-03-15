<?php include '../php/header.php'; ?>

    <main class="container-formation">
    <h1>Cours et formation</h1>

    <div class="search-section">
        <input type="text" id="barre-recherche" placeholder="Rechercher une formation...">
    </div>

    <div id="resultat-formation" style="display: none;"> <h2 id="nom-formation">Nom de la formation</h2>

        <div class="description-container">
            <h3>Description</h3>
            <p id="description-texte">
                </p>
        </div>

        <h2>Responsables de formation</h2>
        <table class="table-responsables">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Contact</th>
                    <th>Rôle</th>
                    <th>Photo</th>
                </tr>
            </thead>
            <tbody id="corps-tableau">
                </tbody>
        </table>

    </div>
    
    <p id="message-vide">Saisissez le nom d'une formation pour voir les détails.</p>
</main>

    <script src="../js/main.js" defer></script><?php include '../php/footer.php'; ?>   