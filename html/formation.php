<?php include '../php/header.php'; ?>

<main class="container-formation">
    <h1>Cours &amp; Formations</h1>
    <p class="page-subtitle">Recherchez un programme pour consulter ses détails et ses responsables pédagogiques.</p>

    <div class="search-section">
        <input type="text" id="barre-recherche" placeholder="Ex : Cycle Ingénieur, Informatique…" autocomplete="off">
    </div>

    <div id="resultat-formation">
        <div id="nom-formation"></div>

        <div class="description-container">
            <h2>Description</h2>
            <p id="description-texte"></p>
        </div>

        <h2 class="titre-responsables">Responsables pédagogiques</h2>
        <table class="table-responsables">
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>Nom</th>
                    <th>Rôle</th>
                    <th>Contact</th>
                </tr>
            </thead>
            <tbody id="corps-tableau"></tbody>
        </table>
    </div>

    <p id="message-vide">Saisissez le nom d'une formation pour voir les détails.</p>
</main>

<script src="../js/main.js" defer></script>
<?php include '../php/footer.php'; ?>